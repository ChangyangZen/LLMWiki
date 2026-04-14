---
id: large_language_models
label: Large Language Models (LLMs)
type: concept
---

# Large Language Models (LLMs)

**Type:** concept

Neural language models used for answer generation, claim decomposition, classification, and autoformalization within the VERGE pipeline.

---

Large Language Models (LLMs) are neural language models trained on vast text corpora that have demonstrated remarkable capabilities in natural language understanding, generation, and reasoning across a wide range of tasks. Within the VERGE framework, LLMs serve multiple roles simultaneously: they generate candidate answers, perform claim decomposition and classification, carry out autoformalization of atomic claims into SMT-LIB2 syntax, and act as judges in soft verification ensembles. The quality and scale of the underlying LLM significantly influence VERGE's performance, particularly with respect to the formalization barrier, which limits effective participation of smaller models in the formal verification pipeline. VERGE is designed to be model-agnostic, allowing different LLMs to be plugged into its various component roles.
