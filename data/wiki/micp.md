---
id: micp
label: MiCP
type: method
---

# MiCP

**Type:** method

Multi-Turn Language Models with Conformal Prediction: a multi-level conformal prediction framework for multi-turn LLM reasoning that enables adaptive early stopping with formal coverage guarantees.

---

MiCP (Multi-Turn Language Models with Conformal Prediction) is the first conformal prediction framework designed specifically for multi-turn large language model reasoning pipelines. Introduced to address the limitations of single-turn conformal methods, MiCP operates across iterative reasoning architectures such as Adaptive RAG and ReAct by allocating distinct error budgets at each reasoning turn. The framework enables principled adaptive early stopping, terminating the reasoning process once sufficient confidence is reached, while maintaining formal coverage guarantees throughout. Experiments across five question answering benchmarks demonstrate that MiCP achieves target coverage levels while simultaneously reducing the number of turns, inference cost, and prediction set size compared to baseline approaches.
