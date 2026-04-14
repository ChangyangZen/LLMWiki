---
id: cant_answer
label: Can't Answer Mechanism
type: concept
---

# Can't Answer Mechanism

**Type:** concept

An abstention label included in the prediction set when no sampled answer is correct within the allowed turn budget, preserving the coverage guarantee for unanswerable questions.

---

The Can't Answer mechanism is an abstention label introduced into MiCP's prediction sets to handle cases where the language model exhausts its full reasoning turn budget without arriving at a reliably correct answer. When no sampled answer cluster is sufficiently consistent to meet the conformal coverage threshold, the Can't Answer label is included in the prediction set, signaling that the system abstains from committing to any specific answer for that instance. This mechanism is critical for preserving the formal coverage guarantee across all test inputs, including unanswerable or highly uncertain questions. The approach builds on prior work such as TRAQ, extending the abstention concept to multi-turn reasoning pipelines with per-turn error budgets.
