---
id: chain_of_thought
label: Chain-of-Thought (CoT)
type: method
---

# Chain-of-Thought (CoT)

**Type:** method

A prompting method that elicits step-by-step reasoning from LLMs, used as a baseline in VERGE evaluations.

---

Chain-of-Thought (CoT) prompting is a technique that encourages large language models to produce explicit intermediate reasoning steps before arriving at a final answer, improving performance on complex multi-step tasks compared to direct answer generation. By eliciting a step-by-step reasoning trace, CoT prompting makes the model's inference process more transparent and allows errors to propagate through identifiable intermediate conclusions. In the VERGE evaluation framework, chain-of-thought prompting serves as a fundamental baseline against which the benefits of formal verification and iterative refinement are measured. CoT is also used internally within VERGE components, such as during claim decomposition and autoformalization, to improve the quality of intermediate outputs.
