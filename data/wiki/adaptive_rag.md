---
id: adaptive_rag
label: Adaptive RAG
type: method
---

# Adaptive RAG

**Type:** method

Retrieval-Augmented Generation that dynamically determines whether and how much to retrieve from external sources based on model output signals across multiple turns.

---

Adaptive Retrieval-Augmented Generation (Adaptive RAG) is a multi-turn extension of standard RAG systems that dynamically determines whether and how much external retrieval is needed based on signals from the language model's outputs at each reasoning step. Rather than retrieving a fixed number of documents unconditionally, Adaptive RAG systems assess the model's current confidence or uncertainty and decide whether to invoke additional retrieval actions, reducing unnecessary retrieval calls and associated computational costs. This iterative retrieve-then-reason loop allows the system to allocate retrieval resources more efficiently across questions of varying complexity. MiCP incorporates Adaptive RAG as one of its primary multi-turn reasoning architectures for evaluation.
