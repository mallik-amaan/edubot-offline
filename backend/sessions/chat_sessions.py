# Simple in-memory session store (Redis later if needed)
chat_sessions = {}

def init_session(session_id: str, class_name: str, subject_name: str):
    chat_sessions[session_id] = {
        "history": [],
        "class_name": class_name,
        "subject_name": subject_name
    }

def add_message(session_id: str, role: str, content: str):
    if session_id not in chat_sessions:
        return
    chat_sessions[session_id]["history"].append({
        "role": role,
        "content": content
    })

def get_session(session_id: str):
    return chat_sessions.get(session_id)
