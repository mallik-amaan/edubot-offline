from backend.rag.rag_integration import rag_chat
from backend.rag.indexer import build_index
from backend.rag.retriever import search


# print(rag_chat("What is psychology?"))


query = "Explain OSMOREGULATION"
class_name = "Class-12"
subject_name = "Biology"

def start_chat(session_id: str, class_name: str, subject_name: str):
    """
    Starts a continuous chat session with the LLM until the user types 'exit'.
    Maintains session context using session_id.
    """
    print(f"Starting chat for Class: {class_name}, Subject: {subject_name}")
    print("Type 'exit' to end the chat.\n")

    while True:
        query = input("You: ").strip()
        if query.lower() == "exit":
            print("Ending chat session.")
            break

        response = rag_chat(
            session_id=session_id,
            query=query,
            class_name=class_name,
            subject_name=subject_name,
            top_k=3
        )

        print("\n----------------------------LLM RESPONSE-------------------------------")
        print(response["answer"])
        print("----------------------------------------------------------------------\n")


start_chat("1234xcvr",class_name,subject_name)
# results = search(query, class_name, subject_name, top_k=5)
# for r in results:
#     print(r["metadata"]["chunk_id"], r["metadata"]["text"],r["score"])
# print("----------------------------LLM RESPONSE-------------------------------")
# print(rag_chat(query,class_name,subject_name)["answer"])