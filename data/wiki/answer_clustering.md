---
id: answer_clustering
label: Answer Clustering
type: method
---

# Answer Clustering

**Type:** method

The process of grouping semantically equivalent sampled LLM answers into clusters using sentence transformers and agglomerative clustering to compute frequency-based nonconformity scores.

---

Answer clustering is the process by which MiCP groups semantically equivalent sampled answers from a language model into discrete clusters in order to estimate the model's confidence at a given reasoning turn. Sentence transformer embeddings are computed for each sampled answer, and agglomerative clustering is applied to merge answers that are semantically similar above a cosine similarity threshold, treating each cluster as a distinct candidate response. The frequency of the largest cluster relative to total samples then informs the normalized entropy nonconformity score used by MiCP to make stopping decisions. This clustering approach allows MiCP to handle the diversity of natural language surface forms without requiring exact string matching, producing more reliable uncertainty estimates for open-ended question answering.
