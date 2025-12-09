import requests

from backend.sessions.chat_sessions import add_message, get_session
# from backend.rag.query_validation import query_validator
from backend.rag.retriever import search

OLLAMA_URL = "http://localhost:11434/api/chat"
MODEL_NAME = "qwen2.5:1.5b"

# In-memory session storage
# session_id -> list of messages (user + assistant)
chat_sessions = {}

def build_prompt(query: str, docs: list):
    """
    Original prompt structure but handles <3 docs gracefully.
    """
    fallback = "I cannot find the question you have asked in the specified subject material. Can you please verify the question."
    # Ensure we have at least 3 docs by filling with empty strings if needed
    while len(docs) < 3:
        docs.append({"metadata": {"text": ""}})

    prompt = f"""
You are an AI Teacher for students and you have to teach them in easy language. Use the provided context to answer the question.
Don't answer the question if the User Question is not related to the context given below. In such a case reply wiht the following response.
Fallback Response:
{fallback}
Context 1:
{docs[0]['metadata']['text']}
--------------------------------------------------------------
Context 2:
{docs[1]['metadata']['text']}
--------------------------------------------------------------
Context 3:
{docs[2]['metadata']['text']}
--------------------------------------------------------------
User Question:
{query}

Answer:
"""
    return prompt.strip()


def run_llm(messages: list):
    """
    Call the LLM with a full conversation history.
    """
    payload = {
        "model": MODEL_NAME,
        "messages": messages,
        "stream": False
    }

    response = requests.post(OLLAMA_URL, json=payload)

    if response.status_code != 200:
        return f"Error from Ollama: {response.text}"

    data = response.json()
    return data.get("message", {}).get("content", "").strip()


def rag_chat(session_id: str, query: str, class_name: str, subject_name: str, top_k: int = 3):
    # (0) Check if the query is validated or not
    # validator = query_validator(query,subject_name)
    # if (validator==0):
    #     return {
    #     "query": query,
    #     "retrieved_docs": [],
    #     "answer": "The Question is not related to this subject. You can change the subject if you want to get answer related to this question."
    # }
    # elif (validator==1):
    #     retrieved_docs = []
    # else:
        # (1) Retrieve relevant docs
    retrieved_docs = search(query, class_name, subject_name, top_k=top_k)

        # (2) Build prompt (same as your old version)
    prompt = build_prompt(query, retrieved_docs)

    # (3) Prepare full conversation messages: system prompt + session history + current user query
    session = get_session(session_id) or {"history": []}
    # session["history"] is a list of {"role": "...", "content": "..."}
    # Start with system message containing the prompt/context
    messages = [{"role": "system", "content": prompt}]
    # Append previous history if any (assumed to be in role/content format compatible with Ollama)
    messages.extend(session.get("history", []))
    # Append current user query as final message
    messages.append({"role": "user", "content": query})

        # (4) Run LLM with full messages
    llm_answer = run_llm(messages)

    # (5) Store conversation
    add_message(session_id, "user", query)
    add_message(session_id, "assistant", llm_answer)

    return {
        "query": query,
        "retrieved_docs": retrieved_docs,
        "answer": llm_answer
    }
