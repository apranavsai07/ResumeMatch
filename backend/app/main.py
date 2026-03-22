from fastapi import FastAPI, UploadFile, File, Form
from app.resume_parser import extract_text_from_pdf
from app.skill_extractor import load_skills, extract_skills
from app.text_cleaner import clean_text
from app.semantic_matcher import compute_similarity
from app.llm_advisor import generate_career_advice
from app.explain import explain_score
from app.improvements import generate_improvements
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # allow all (for development)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
skills_list = load_skills()

@app.post("/analyze/")
async def analyze_resume(
    jd_text: str = Form(...),
    file: UploadFile = File(...)
):
    file_bytes = await file.read()
    resume_text = extract_text_from_pdf(file_bytes)

    cleaned_resume = clean_text(resume_text)
    cleaned_jd = clean_text(jd_text)

    resume_skills = extract_skills(cleaned_resume, skills_list)
    jd_skills = extract_skills(cleaned_jd, skills_list)

    matched_skills = list(set(resume_skills) & set(jd_skills))
    missing_skills = list(set(jd_skills) - set(resume_skills))

    semantic_score = float(compute_similarity(resume_text, jd_text))
    total_jd_skills = len(jd_skills)

    if total_jd_skills == 0:
        match_score = 0
    else:
        match_score = int((len(matched_skills) / total_jd_skills) * 100)

    overall_score = int((match_score * 0.6) + (semantic_score * 0.4))
        
    base_advice = generate_improvements(
    missing_skills,
    matched_skills,
    semantic_score
    )

    # Decide whether to use LLM
    if semantic_score < 70:
        llm_advice = generate_career_advice(
        semantic_score,
        missing_skills,   # 🔥 limit input
        matched_skills
    )
    else:
        llm_advice = None
# Ensure list format
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
    source = "rule_based"
    message = "These recommendations are tailored based on your skills and job match analysis."

# Structured response
    return {
    "match_analysis": {
        "overall_score": int(overall_score),
        "skill_match": int(match_score),
        "context_match": round(semantic_score, 2),
        
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
        "message": message
    }
}


@app.get("/test")
def test():
    return {"status": "NEW VERSION RUNNING"}

