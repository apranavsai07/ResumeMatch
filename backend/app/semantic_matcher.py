from dotenv import load_dotenv
import os
import numpy as np
import cohere

from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity as sklearn_cosine_similarity

load_dotenv()

# Cohere client
co = cohere.Client(os.getenv("COHERE_API_KEY"))


# -----------------------------
# COSINE SIMILARITY
# -----------------------------
def cosine_similarity(vec1, vec2):

    vec1 = np.array(vec1)
    vec2 = np.array(vec2)

    return np.dot(vec1, vec2) / (
        np.linalg.norm(vec1) * np.linalg.norm(vec2)
    )


# -----------------------------
# COHERE EMBEDDINGS
# -----------------------------
def embedding_similarity(resume_text, jd_text):

    response = co.embed(
        texts=[resume_text, jd_text],
        model="embed-english-light-v3.0",
        input_type="search_document"
    )

    vec1 = response.embeddings[0]
    vec2 = response.embeddings[1]

    similarity = cosine_similarity(vec1, vec2)

    return float(similarity * 100)


# -----------------------------
# TF-IDF FALLBACK
# -----------------------------
def tfidf_similarity(resume_text, jd_text):

    documents = [resume_text, jd_text]

    vectorizer = TfidfVectorizer(
        stop_words='english',
        ngram_range=(1,2)
    )

    tfidf_matrix = vectorizer.fit_transform(documents)

    similarity = sklearn_cosine_similarity(
        tfidf_matrix[0:1],
        tfidf_matrix[1:2]
    )[0][0]

    return float(similarity * 100)


# -----------------------------
# MAIN FUNCTION
# -----------------------------
def compute_similarity(resume_text, jd_text):

    try:

        print("Using Cohere embeddings...")

        return embedding_similarity(
            resume_text,
            jd_text
        )

    except Exception as e:

        print("Cohere embedding failed:", e)
        print("Using TF-IDF fallback...")

        try:

            return tfidf_similarity(
                resume_text,
                jd_text
            )

        except Exception as fallback_error:

            print("TF-IDF failed:", fallback_error)

            return 50.0