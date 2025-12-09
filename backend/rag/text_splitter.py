import re
import nltk
nltk.download('punkt', quiet=True)
from nltk.tokenize import sent_tokenize

CHUNK_SIZE = 300       # max words per chunk
CHUNK_OVERLAP = 50     # overlap words between chunks
MIN_CHUNK_SIZE = 100   # avoid tiny chunks

def clean_text(txt: str) -> str:
    # Remove multiple spaces, tabs, and newlines
    txt = re.sub(r"\s+", " ", txt)
    # Remove non-printable characters
    txt = re.sub(r"[^\x20-\x7E]+", " ", txt)
    return txt.strip()

def split_into_chunks(text: str):
    """
    Splits text into overlapping chunks by sentence boundaries.
    """
    text = clean_text(text)
    sentences = sent_tokenize(text)
    chunks = []
    current = []
    current_len = 0

    for s in sentences:
        words = s.split()
        if current_len + len(words) > CHUNK_SIZE:
            if current_len >= MIN_CHUNK_SIZE:
                chunks.append(" ".join(current))
            # overlap last CHUNK_OVERLAP words
            current = current[-CHUNK_OVERLAP:] if CHUNK_OVERLAP < len(current) else current.copy()
            current_len = len(current)

        current.extend(words)
        current_len += len(words)

    if current_len >= MIN_CHUNK_SIZE:
        chunks.append(" ".join(current))

    return chunks
