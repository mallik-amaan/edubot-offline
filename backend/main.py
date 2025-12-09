from fastapi import FastAPI, UploadFile, File, Form
from fastapi.responses import JSONResponse
from fastapi.middleware.cors import CORSMiddleware
import shutil, os
from pathlib import Path
from backend.rag.rag_integration import rag_chat
from backend.sessions.chat_sessions import get_session, init_session
from backend.rag.retriever import search
from backend.llm.llm_client import call_ollama
from backend.rag.indexer import build_index
from backend.core.utils import sanitize_text
from backend.core.config import DOCS_DIR, TOP_K

app = FastAPI(title="EduBot RAG Backend")

# Allow CORS for local development — adjust origins in production
# NOTE: this allows ALL origins (good for local testing only)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

DOCS_DIR.mkdir(parents=True, exist_ok=True)

@app.post("/admin/upload")
async def upload_file(file: UploadFile = File(...)):
    save_path = DOCS_DIR / file.filename
    with open(save_path, "wb") as buffer:
        shutil.copyfileobj(file.file, buffer)
    return {"ok": True, "message": f"Saved {file.filename}. Call /admin/reindex to index."}

@app.post("/admin/reindex")
async def reindex():
    success = build_index()
    if success:
        return {"ok": True, "message": "Reindex complete."}
    return JSONResponse({"ok": False, "message":"No docs to index."}, status_code=400)

@app.post("/search")
async def api_search(q: str = Form(...)):
    # if not is_safe_query(q):
    #     return JSONResponse({"ok": False, "error": "Query contains forbidden term."}, status_code=400)
    results = search(q, top_k=TOP_K)
    # return short snippets
    snippets = [{"source": r["source"], "text": r["text"][:500]} for r in results]
    return {"ok": True, "results": snippets}
@app.post("/chat/start")
async def start_chat_api(
    session_id: str = Form(...),
    class_name: str = Form(...),
    subject_name: str = Form(...)
):
    # Create session
    init_session(session_id, class_name, subject_name)

    return {
        "ok": True,
        "message": "Chat session started.",
        "session_id": session_id
    }


@app.post("/chat/continue")
async def continue_chat_api(
    session_id: str = Form(...),
    query: str = Form(...)
):
    session = get_session(session_id)
    if session is None:
        return JSONResponse(
            {"ok": False, "error": "Invalid session_id"},
            status_code=400
        )

    response = rag_chat(
        session_id=session_id,
        query=query,
        class_name=session["class_name"],
        subject_name=session["subject_name"],
        top_k=3
    )

    return {
        "ok": True,
        "answer": response["answer"],
        "history": session["history"]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=False)
