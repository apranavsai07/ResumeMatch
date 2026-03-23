from dotenv import load_dotenv
import ast
import os
from google import genai
load_dotenv() 

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_career_advice(semantic_score, missing_skills, matched_skills):

    if semantic_score < 50:
        instruction = "Give EXACTLY 5 strong improvement actions"
    elif semantic_score < 70:
        instruction = "Give EXACTLY 3 improvement suggestions"
    else:
        instruction = "Give EXACTLY 3 optimization tips"

    prompt = f"""
    You are a career advisor.

    Score: {semantic_score}
    Missing Skills: {missing_skills}
    Matched Skills: {matched_skills}

    {instruction}

    Rules:
    - Return ONLY a Python list of strings
    - Each point max 20 words
    - No bullet symbols
    - No explanation
    """

    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash",
            contents=prompt
        )

        text = response.text.strip()

        # Try parsing
        try:
            advice_list = ast.literal_eval(text)
            if isinstance(advice_list, list):
                return advice_list
        except:
            pass

        # Fallback
        lines = text.split("\n")
        return [line.strip("-• ").strip() for line in lines if line.strip()]

    except Exception as e:
        print("LLM failed:", e)
        return ["Focus on improving key skills and aligning your resume"]
   