---
id: fover_prm
label: FoVer-PRM
type: model
---

# FoVer-PRM

**Type:** model

PRMs obtained by fine-tuning Llama 3.1 8B or Qwen 2.5 7B on FoVer-40K for step-level binary classification of reasoning correctness.

---

FoVer-PRM refers to the family of Process Reward Models obtained by fine-tuning either Llama 3.1 8B or Qwen 2.5 7B on the FoVer-40K dataset for the task of step-level binary classification of reasoning correctness. These models are trained to predict whether each individual step in a multi-step reasoning chain is correct or erroneous, using labels derived from formal verification rather than human annotation or Monte Carlo roll-outs. FoVer-PRMs are evaluated in a Best-of-K setting across 12 benchmarks spanning mathematics, formal logic, natural language inference, and general reasoning, where they consistently match or outperform comparable existing PRMs. Notably, FoVer-PRMs demonstrate strong cross-task generalization, improving performance on informal reasoning tasks despite being trained exclusively on formally verified data.
