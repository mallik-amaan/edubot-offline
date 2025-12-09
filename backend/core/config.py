# rag/config.py
from pathlib import Path
import os

# Embedding model to use (sentence-transformers)
EMBED_MODEL = os.getenv("EMBED_MODEL", "sentence-transformers/all-MiniLM-L6-v2")

# Retrieval parameters
TOP_K = int(os.getenv("TOP_K", "5"))        # default returned items
SCORE_THRESHOLD = float(os.getenv("SCORE_THRESHOLD", "0.2"))  # fallback cutoff for similarity (0-1)

# Chunking params (approx words -> approx tokens)
CHUNK_SIZE_WORDS = int(os.getenv("CHUNK_SIZE_WORDS", "450"))
CHUNK_OVERLAP_WORDS = int(os.getenv("CHUNK_OVERLAP_WORDS", "100"))

# Paths
DATA_DIR = Path(os.getenv("DATA_DIR", "data"))
DOCS_DIR = DATA_DIR / "docs"
INDEX_DIR = DATA_DIR / "index"
INDEX_DIR.mkdir(parents=True, exist_ok=True)

INDEX_FILE = INDEX_DIR / "faiss_index.bin"
META_FILE = INDEX_DIR / "metadata.pkl"
ID_COUNTER_FILE = INDEX_DIR / "id_counter.pkl"  # stores last used id for reproducible ids
