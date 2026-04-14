---
id: cross_task_generalization
label: Cross-Task Generalization
type: concept
---

# Cross-Task Generalization

**Type:** concept

The ability of PRMs trained on formal logic and theorem proving tasks to improve performance on substantially different tasks such as NLI and BBH.

---

Cross-task generalization, in the context of the FoVer paper, refers to the ability of PRMs trained on formal logic and theorem proving tasks to improve reasoning performance on substantially different task types, including informal natural language reasoning benchmarks such as NLI and BIG-Bench Hard. This property is notable because the training data for FoVer-PRMs contains no examples from these informal domains, yet the models consistently select better candidate solutions in a Best-of-K setting across these tasks. The results suggest that step-level correctness supervision learned from formal reasoning tasks encodes domain-general reasoning quality signals. Cross-task generalization is a key finding of the FoVer paper, highlighting the broader utility of formally verified PRM training data beyond mathematical domains.
