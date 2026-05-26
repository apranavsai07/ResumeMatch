from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity


# Load model once at startup
model = SentenceTransformer("all-MiniLM-L6-v2")


# -----------------------------
# SENTENCE TRANSFORMER SIMILARITY
# -----------------------------
def compute_similarity(resume_text, jd_text):

    try:

        print("Using MiniLM embeddings...")

        embeddings = model.encode(
            [resume_text, jd_text]
        )

        similarity = cosine_similarity(
            [embeddings[0]],
            [embeddings[1]]
        )[0][0]

        return float(similarity * 100)

    except Exception as e:

        print("Embedding error:", e)

        return 0.0