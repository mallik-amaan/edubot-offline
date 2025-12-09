import os
import re
import pickle
from pathlib import Path
from typing import List, Tuple
from backend.core.config import CHUNK_SIZE_WORDS, CHUNK_OVERLAP_WORDS, DOCS_DIR, INDEX_DIR, META_FILE
from backend.rag.text_splitter import split_into_chunks, clean_text

DOCS_DIR.mkdir(parents=True, exist_ok=True)
INDEX_DIR.mkdir(parents=True, exist_ok=True)

def chunk_text(text: str, chunk_size: int = CHUNK_SIZE_WORDS, overlap: int = CHUNK_OVERLAP_WORDS) -> List[str]:
    """
    Wrapper around the centralized splitter in backend.rag.text_splitter.

    Note: split_into_chunks currently reads chunk sizes from its module-level
    constants. The chunk_size/overlap parameters are accepted for backward
    compatibility but are not applied unless split_into_chunks is extended to
    accept them.
    """
    text = sanitize_text(text)
    # delegate actual splitting to shared implementation
    return split_into_chunks(text)

def save_metadata(meta, path=META_FILE):
    with open(path, "wb") as f:
        pickle.dump(meta, f)

def load_metadata(path=META_FILE):
    if path.exists():
        with open(path, "rb") as f:
            return pickle.load(f)
    return []

def sanitize_text(text: str) -> str:
    # minimal cleaning
    text = re.sub(r'\s+', ' ', text).strip()
    return text
