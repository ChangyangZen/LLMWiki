---
id: pac_learning
label: PAC Learning
type: method
---

# PAC Learning

**Type:** method

Probably Approximately Correct framework applied to provide statistical guarantees on the learned DTMC, bounding deviation between learned and true system dynamics.

---

Probably Approximately Correct (PAC) learning is a statistical learning framework that provides formal guarantees on the quality of a learned model, bounding the probability that the learned model deviates from the true underlying distribution by more than a specified error margin. In ProbGuard, PAC-style guarantees are applied to the learned DTMC transition probabilities to ensure that the model faithfully represents the true behavioral dynamics of the LLM agent given a sufficient number of observed execution traces. This provides a theoretical foundation for the reliability of ProbGuard's risk predictions, ensuring that interventions are triggered based on statistically sound estimates of unsafe outcomes. The sample complexity bounds derived from PAC learning inform the minimum number of traces required to achieve desired levels of accuracy and confidence.
