import faiss
import pickle
from pathlib import Path
from .loaders import load_document
from .text_splitter import split_into_chunks
from .embedder import embed_chunks
import numpy as np

DOCS_ROOT = Path("data/docs")
INDEX_ROOT = Path("data/index")
INDEX_ROOT.mkdir(parents=True, exist_ok=True)

def build_index():
    """
    Walk through: data/docs/Class-X/Subject/files
    and build a separate FAISS index for each subject.
    """
    for class_dir in DOCS_ROOT.iterdir():
        if not class_dir.is_dir():
            continue

        class_name = class_dir.name  # Example: "Class-12"
        print(f"\n=== Processing {class_name} ===")

        # Each subject inside Class-X
        for subject_dir in class_dir.iterdir():
            if not subject_dir.is_dir():
                continue

            subject_name = subject_dir.name  # Example: "biology"
            print(f"\n--- Subject: {subject_name} ---")

            documents = []
            metadata = []

            # Load all files under subject
            for file in subject_dir.glob("*"):
                if file.is_file():
                    print(f"Loading: {file}")

                    text = load_document(file)
                    chunks = split_into_chunks(text)

                    for i, chunk in enumerate(chunks):
                        documents.append(chunk)
                        metadata.append({
                            "class": class_name,
                            "subject": subject_name,
                            "source": file.name,
                            "chunk_id": f"{file.name}-{i}",
                            "text": chunk
                        })

            if len(documents) == 0:
                print(f"No files found for {class_name}/{subject_name}, skipping...")
                continue

            # Compute embeddings
            embeddings = embed_chunks(documents).astype("float32")
            faiss.normalize_L2(embeddings)

            d = embeddings.shape[1]
            index = faiss.IndexFlatIP(d)
            index.add(embeddings)

            # Build output folder
            out_dir = INDEX_ROOT / class_name / subject_name
            out_dir.mkdir(parents=True, exist_ok=True)

            # Save FAISS index
            faiss.write_index(index, str(out_dir / "faiss_index.bin"))

            # Save metadata
            with open(out_dir / "metadata.pkl", "wb") as f:
                pickle.dump(metadata, f)

            print(f"Indexed {len(documents)} chunks for {class_name}/{subject_name}.")

def load_index(class_name: str, subject_name: str):
    """
    Load index for a specific class & subject.
    Example:
        load_index("Class-12", "biology")
    """
    index_path = INDEX_ROOT / class_name / subject_name / "faiss_index.bin"
    meta_path = INDEX_ROOT / class_name / subject_name / "metadata.pkl"

    if not index_path.exists() or not meta_path.exists():
        print(f"No index found for {class_name}/{subject_name}")
        return None, []

    index = faiss.read_index(str(index_path))

    with open(meta_path, "rb") as f:
        metadata = pickle.load(f)

    print(f"Loaded index: {class_name}/{subject_name} with {len(metadata)} chunks.")
    return index, metadata
