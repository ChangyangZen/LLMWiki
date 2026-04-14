---
id: instruction_tuning
label: Instruction Tuning
type: method
---

# Instruction Tuning

**Type:** method

A supervised fine-tuning approach used to train AutoReal-Prover on proof CoT data, teaching the model to generate interleaved proof commands and natural-language rationales.

---

Instruction Tuning is a supervised fine-tuning paradigm in which a pre-trained language model is trained on a curated dataset of instruction-response pairs, teaching the model to follow structured directives and produce task-appropriate outputs. In the AutoReal framework, instruction tuning is used to train AutoReal-Prover on the Proof CoT Dataset, where each training instance consists of a theorem statement with proof context as the instruction and an interleaved sequence of proof commands and natural-language rationales as the response. This fine-tuning process specializes the Qwen2.5-Coder-7B base model for Isabelle/HOL theorem proving in industrial verification settings, embedding knowledge of proof-state evolution and project-specific lemma usage. Instruction tuning enables the compact 7B-parameter model to substantially outperform much larger general-purpose models on seL4 benchmarks.
