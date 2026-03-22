from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

model = SentenceTransformer('all-MiniLM-L6-v2')

def compute_similarity(resume_text, jd_text):
    embeddings = model.encode([resume_text, jd_text])

    resume_vector = embeddings[0].reshape(1, -1)
    jd_vector = embeddings[1].reshape(1, -1)

    similarity = cosine_similarity(resume_vector, jd_vector)[0][0]

    return float(round(similarity * 100, 2))