from fastapi import FastAPI
from backend.api.models import ChatRequest

from backend.rag.rag_integration import rag_chat

app = FastAPI()

@app.post("/chat")
async def chat(req: ChatRequest):
    result = rag_chat(req.query)    
    return result

@app.get("/")
async def root():
    return {"message": "Qwen2.5 RAG API is running"}
