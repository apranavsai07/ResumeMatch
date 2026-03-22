# Career AI – Resume Analyzer & Job Matcher

Career AI is a full-stack web application that analyzes resumes and evaluates how well they match a target job role. It combines rule-based techniques with AI-powered semantic analysis to generate meaningful insights and actionable career recommendations.

---

## Features

* Upload resume (PDF)
* Semantic similarity scoring (AI-based)
* Skill-based matching system
* Structured scoring:

  * Overall Score
  * Skill Match
  * Context Match
* Explainability:

  * Why you got this score
* Personalized improvements:

  * Skill gaps
  * Resume suggestions
  * Project recommendations
* Hybrid intelligence:

  * Rule-based system + LLM enhancements
* Clean React UI

---

## Tech Stack

### Backend

* FastAPI
* Python
* Sentence Transformers (semantic similarity)
* Gemini API (LLM recommendations)

### Frontend

* React (Vite)
* CSS (custom styling)

---

## How It Works

1. Resume Parsing

   * Extracts text from uploaded PDF

2. Text Processing

   * Cleans and normalizes resume + job description

3. Skill Extraction

   * Matches predefined skills list

4. Scoring System

   * Rule-based skill match score
   * Semantic similarity score (AI)

5. Explainability Layer

   * Explains why the score was assigned

6. Improvement Engine

   * Rule-based suggestions
   * LLM-enhanced recommendations (if needed)

---

## Input Methods

Users can provide job input in multiple ways:

* Paste full job description
* Enter role name (e.g., "Web Developer")
* Add optional skill description

The system uses:

* Predefined job templates (for consistency)
* LLM (for dynamic enhancement)

---

## Output Structure

```json
{
  "match_analysis": {
    "overall_score": 72,
    "skill_match": 65,
    "context_match": 78,
    "label": "Moderate Match"
  },
  "skills": {
    "matched": ["React", "JavaScript"],
    "missing": ["Docker", "AWS"]
  },
  "why_this_score": [
    "Moderate skill match",
    "Missing key skills like Docker",
    "Partial alignment with job context"
  ],
  "advice": {
    "summary": "Your profile is moderately aligned...",
    "improvements": [
      "Add Docker to your skillset",
      "Build deployment-based projects"
    ],
    "message": "Personalized recommendations based on your profile and job requirements."
  }
}
```

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd Career_AI
```

---

### 2. Backend Setup

```bash
cd backend
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
```

---

### 3. Add Environment Variables

Create `.env` file in backend:

```
GEMINI_API_KEY=your_api_key_here
```

---

### 4. Run Backend

```bash
python -m uvicorn app.main:app --reload
```

---

### 5. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## Deployment

### Frontend

* Vercel / Netlify

### Backend

* Render / Railway

---

## Notes

* CORS must be enabled for frontend-backend communication
* Gemini API has quota limits (fallback logic implemented)
* LLM is used only for enhancement, not core scoring

---

## Future Improvements

* Chat-based career assistant
* Resume rewriting suggestions
* Role recommendation system
* Multi-job comparison
* Authentication & user history

---

## Author

Built as a project for learning and practical career guidance using AI.

---

## If you like this project

Give it a star and share your feedback!
