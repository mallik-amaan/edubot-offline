# rag/embedder.py
from sentence_transformers import SentenceTransformer
import numpy as np
from backend.core.config import EMBED_MODEL
from typing import List

# Load model once
_model = None

def get_model():
    global _model
    if _model is None:
        _model = SentenceTransformer(EMBED_MODEL,device="cpu")
    return _model

def embed_chunks(chunks: List[str], batch_size: int = 32) -> np.ndarray:
    """
    Encode a list of strings and return normalized float32 numpy array.
    """
    model = get_model()
    embeddings = model.encode(
        chunks,
        convert_to_numpy=True,
        show_progress_bar=False,
        batch_size=batch_size
    )
    embeddings = _normalize(embeddings.astype("float32"))
    return embeddings

def embed_query(query: str) -> np.ndarray:
    model = get_model()
    emb = model.encode([query], convert_to_numpy=True)
    emb = _normalize(emb.astype("float32"))
    return emb

def _normalize(vecs: np.ndarray) -> np.ndarray:
    # avoid division by zero
    norms = np.linalg.norm(vecs, axis=1, keepdims=True)
    norms[norms == 0] = 1e-9
    return vecs / norms
