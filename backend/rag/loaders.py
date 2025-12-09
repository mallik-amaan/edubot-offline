# rag/loaders.py
from pathlib import Path
import docx2txt
import PyPDF2

def load_txt(path: Path) -> str:
    try:
        with open(path, "r", encoding="utf-8", errors="ignore") as f:
            return f.read()
    except Exception:
        # fallback reading as binary decode
        with open(path, "rb") as f:
            return f.read().decode("utf-8", errors="ignore")

def load_pdf(path: Path) -> str:
    try:
        reader = PyPDF2.PdfReader(str(path))
        out = []
        for page in reader.pages:
            try:
                text = page.extract_text()
            except Exception:
                text = ""
            if text:
                out.append(text)
        return "\n".join(out)
    except Exception as e:
        raise RuntimeError(f"Failed to read PDF {path}: {e}")

def load_docx(path: Path) -> str:
    try:
        return docx2txt.process(str(path)) or ""
    except Exception as e:
        raise RuntimeError(f"Failed to read DOCX {path}: {e}")

def load_document(path) -> str:
    path = Path(path)
    ext = path.suffix.lower()
    if ext == ".txt":
        return load_txt(path)
    if ext == ".pdf":
        return load_pdf(path)
    if ext == ".docx":
        return load_docx(path)
    raise ValueError(f"Unsupported file type: {ext}")
