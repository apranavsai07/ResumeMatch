from dotenv import load_dotenv
import numpy as np
import os
from google import genai
load_dotenv() 

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))


def cosine_similarity(vec1, vec2):
    vec1 = np.array(vec1)
    vec2 = np.array(vec2)
    return np.dot(vec1, vec2) / (np.linalg.norm(vec1) * np.linalg.norm(vec2))


def compute_similarity(resume_text, jd_text):
    try:
        # Get embeddings from Gemini
        res_embed = client.models.embed_content(
            model="gemini-embedding-2-preview",
            contents=resume_text
        )

        jd_embed = client.models.embed_content(
            model="gemini-embedding-2-preview",
            contents=jd_text
        )

        score = cosine_similarity(
            res_embed.embeddings[0].values,
            jd_embed.embeddings[0].values
        )

        return float(score * 100)

    except Exception as e:
        print("Embedding error:", e)
        return 0.0