import requests

OLLAMA_URL = "http://localhost:11434/api/chat"

def call_ollama(model: str, messages: list, options: dict = None):
    payload = {
        "model": model,
        "messages": messages,
        "stream": False
    }

    if options:
        payload["options"] = options

    response = requests.post(OLLAMA_URL, json=payload)

    if response.status_code != 200:
        raise Exception(f"Ollama Error: {response.text}")

    data = response.json()
    return data["message"]["content"]
