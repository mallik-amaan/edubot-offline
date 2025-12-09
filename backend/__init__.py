# import requests
# import json

# prompt = "Explain photosynthesis"

# resp = response = requests.post(
#     "http://localhost:11434/api/generate",
#     json={
#         "model": "phi3:mini",
#         "prompt": prompt,
#         "stream": False,
#         "options": {
#             "num_ctx": 768,        # lowers compute size drastically
#             "temperature": 0.2,    # deterministic
#             "top_k": 15,           # fast sampling
#             "top_p": 0.8,          # reduced search space
#             "repeat_penalty": 1.05
#         }
#     }
# )

# full = ""

# for line in resp.iter_lines():
#     if line:
#         obj = json.loads(line.decode("utf-8"))
#         full += obj.get("response", "")

# print(full)
