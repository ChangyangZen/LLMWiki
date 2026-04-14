---
id: dspy
label: DSPy
type: method
---

# DSPy

**Type:** method

A framework that compiles declarative LLM calls into optimized pipelines, achieving 25-65% improvement over prompt engineering and serving as a prior work antecedent to compiled AI.

---

DSPy is a programming framework that compiles declarative specifications of LLM-based pipelines into optimized prompt programs, achieving 25 to 65 percent improvement over hand-crafted prompt engineering by treating prompt construction as an optimization problem. It introduced the notion of compile-time optimization of language model interactions, making it a direct intellectual antecedent to the compiled AI paradigm. DSPy focuses primarily on optimizing prompt templates and few-shot examples rather than generating standalone executable code artifacts, distinguishing it from compiled AI's emphasis on producing fully deployable, deterministic code. The compiled AI paper cites DSPy as foundational prior work in the space of ahead-of-time optimization for LLM workflows.
