import numpy as np
from sentence_transformers import SentenceTransformer
from .indexer import load_index
from backend.core.config import EMBED_MODEL, TOP_K
import faiss

# Load embedding model once
embed_model = SentenceTransformer(EMBED_MODEL, device="cpu")

# Global storage for currently loaded index
current_index = None
current_metadata = None
current_class = None
current_subject = None


def ensure_index_loaded(class_name: str, subject_name: str):
    """
    Load FAISS index only if not already loaded or if class/subject changed.
    """
    global current_index, current_metadata, current_class, current_subject

    if (current_index is None or
        current_class != class_name or
        current_subject != subject_name):
        
        current_index, current_metadata = load_index(class_name, subject_name)
        current_class = class_name
        current_subject = subject_name


def search(query: str, class_name: str, subject_name: str, top_k: int = TOP_K, min_score: float = 0.3):
    """
    Search in FAISS index filtered by class & subject.
    """
    ensure_index_loaded(class_name, subject_name)

    if current_index is None or len(current_metadata) == 0:
        print(f"No index available for {class_name}/{subject_name}")
        return []

    # Compute query embedding
    q_emb = embed_model.encode([query], convert_to_numpy=True).astype("float32")
    faiss.normalize_L2(q_emb)  # normalize query for cosine similarity

    # Search in FAISS
    D, I = current_index.search(q_emb, top_k*2)  # retrieve more to filter later
    results = []

    for dist, idx in zip(D[0], I[0]):
        if idx >= len(current_metadata):
            continue
        score = dist  # IP = cosine similarity
        if score < min_score:
            continue
        results.append({"metadata": current_metadata[idx], "score": score})
        if len(results) >= top_k:
            break

    return results
