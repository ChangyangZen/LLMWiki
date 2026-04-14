---
id: autoreal
label: AutoReal
type: method
---

# AutoReal

**Type:** method

An LLM-driven theorem proving method for real-world industrial-scale verification that incorporates CoT-based proof training and context augmentation to improve proof success rates and explainability.

---

AutoReal is an LLM-driven theorem proving method designed for real-world industrial-scale formal verification, specifically targeting large proof corpora such as the seL4 microkernel project in Isabelle/HOL. It introduces two principal innovations: chain-of-thought (CoT)-based proof training, which pairs proof steps with natural-language explanations of their effect on the proof state, and context augmentation, which supplies relevant auxiliary definitions and lemmas to the model during proof generation. AutoReal is instantiated in a compact 7B-parameter model called AutoReal-Prover, fine-tuned from Qwen2.5-Coder-7B using these techniques. On a benchmark of 660 seL4 theorems, AutoReal achieves a proof success rate of 51.67%, substantially outperforming the prior best of 27.06% reported by Selene using GPT-4.
