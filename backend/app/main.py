from fastapi import FastAPI, UploadFile, File, Form
from fastapi.middleware.cors import CORSMiddleware

from app.resume_parser import extract_text_from_pdf
from app.skill_extractor import load_skills, extract_skills
from app.text_cleaner import clean_text
from app.semantic_matcher import compute_similarity
from app.llm_advisor import generate_career_advice
from app.explain import explain_score
from app.improvements import generate_improvements

app = FastAPI()

# CORS (important for frontend)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Load once
skills_list = load_skills()


@app.post("/analyze/")
async def analyze_resume(
    jd_text: str = Form(...),
    file: UploadFile = File(...)
):
    try:
        # ── READ FILE ───────────────────────────────
        file_bytes = await file.read()
        resume_text = extract_text_from_pdf(file_bytes)

        # ── CLEAN TEXT ──────────────────────────────
        cleaned_resume = clean_text(resume_text)
        cleaned_jd = clean_text(jd_text)

        # ── SKILL EXTRACTION ────────────────────────
        resume_skills = extract_skills(cleaned_resume, skills_list)
        jd_skills = extract_skills(cleaned_jd, skills_list)

        matched_skills = list(set(resume_skills) & set(jd_skills))
        missing_skills = list(set(jd_skills) - set(resume_skills))

        # ── SEMANTIC SCORE ──────────────────────────
        semantic_score = float(compute_similarity(resume_text, jd_text))

        total_jd_skills = len(jd_skills)

        match_score = (
            int((len(matched_skills) / total_jd_skills) * 100)
            if total_jd_skills > 0 else 0
        )

        overall_score = int((match_score * 0.6) + (semantic_score * 0.4))

        # ── LABEL (IMPORTANT FOR FRONTEND) ──────────
        if overall_score >= 75:
            label = "Strong Match"
        elif overall_score >= 50:
            label = "Moderate Match"
        else:
            label = "Weak Match"

        # ── IMPROVEMENTS ────────────────────────────
        base_advice = generate_improvements(
            missing_skills,
            matched_skills,
            semantic_score
        )

        # ── OPTIONAL LLM ────────────────────────────
        llm_advice = None
        if semantic_score < 70:
            try:
                llm_advice = generate_career_advice(
                    semantic_score,
                    missing_skills[:5],
                    matched_skills[:5]
                )
            except Exception:
                llm_advice = None

        if llm_advice:
            improvements = (
                base_advice["skill_improvements"][:2] +
                base_advice["resume_improvements"][:1] +
                llm_advice[:3]
            )
        else:
            improvements = (
                base_advice["skill_improvements"] +
                base_advice["resume_improvements"] +
                base_advice["project_suggestions"]
            )

        # ── RESPONSE ────────────────────────────────
        return {
            "match_analysis": {
                "overall_score": overall_score,
                "skill_match": match_score,
                "context_match": round(semantic_score, 2),
                "label": label
            },
            "skills": {
                "matched": matched_skills,
                "missing": missing_skills
            },
            "why_this_score": explain_score(
                match_score,
                semantic_score,
                matched_skills,
                missing_skills,
                len(jd_skills)
            ),
            "advice": {
                "improvements": improvements,
                "message": "These recommendations are tailored based on your analysis."
            }
        }

    except Exception as e:
        # 🔥 CRITICAL for debugging
        return {
            "error": str(e),
            "status": "failed"
        }


@app.get("/")
def root():
    return {"status": "API is running"}


@app.get("/test")
def test():
    return {"status": "NEW VERSION RUNNING"}