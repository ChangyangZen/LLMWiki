---
id: traq
label: TRAQ
type: method
---

# TRAQ

**Type:** method

Trustworthy Retrieval Augmented Question Answering via conformal prediction, a prior single-turn CP method for RAG that assigns a Can't Answer label for unreliable predictions.

---

TRAQ (Trustworthy Retrieval Augmented Question Answering) is a prior conformal prediction method for single-turn retrieval-augmented generation systems that constructs prediction sets with formal coverage guarantees and assigns a Can't Answer abstention label when the model's confidence falls below a calibrated threshold. It was among the first works to apply conformal prediction to open-domain QA with retrieval, demonstrating that distribution-free coverage guarantees can be achieved in practical NLP pipelines. However, TRAQ is limited to single-turn settings and does not address the iterative, multi-turn reasoning dynamics present in systems such as Adaptive RAG and ReAct. MiCP extends the TRAQ paradigm by introducing multi-turn error budget allocation and adaptive early stopping, building on TRAQ's Can't Answer mechanism to handle unanswerable questions within a principled multi-turn conformal framework.
