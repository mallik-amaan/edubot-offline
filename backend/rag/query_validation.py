
# from sentence_transformers import SentenceTransformer, util

# model = SentenceTransformer("all-MiniLM-L6-v2")

# FOLLOWUP_PATTERNS = [
#     "explain more", "explain it more", "explain in detail", "tell me more",
#     "make it simpler", "simplify it", "summarize again", "clarify this",
#     "what do you mean", "give an example", "continue", "go on"
# ]

# def is_follow_up(query: str) -> bool:
#     q = query.lower().strip()
#     return any(p in q for p in FOLLOWUP_PATTERNS)

# def subject_similarity(query: str, subject: str, threshold: float = 0.45) -> bool:
#     """
#     Embedding similarity check between query and subject.
#     Threshold ~0.40–0.50 works well in practice.
#     """
#     q_emb = model.encode(query, convert_to_tensor=True)
#     s_emb = model.encode(subject, convert_to_tensor=True)
    
#     sim = util.cos_sim(q_emb, s_emb).item()
#     return sim >= threshold


# def query_validator(query: str, subject: str):
#     """
#     0 -> not validated (irrelevant to subject)
#     1 -> follow-up question (no need to retrieve docs)
#     2 -> subject-relevant question (retrieve docs)
#     """

#     # 1. detect follow-up
#     if is_follow_up(query):
#         return 1
    
#     # 2. check semantic similarity to subject
#     if subject_similarity(query, subject):
#         return 2
    
#     # 3. otherwise irrelevant
#     return 0
