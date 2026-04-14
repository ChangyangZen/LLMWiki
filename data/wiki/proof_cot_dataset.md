---
id: proof_cot_dataset
label: Proof CoT Dataset
type: dataset
---

# Proof CoT Dataset

**Type:** dataset

A dataset of approximately 200k step-level CoT instances constructed from seL4 proof traces, pairing Isabelle proof commands with natural-language explanations of their proof-state effects.

---

The Proof CoT Dataset is a training corpus of approximately 200,000 step-level chain-of-thought instances constructed from seL4 proof traces provided by the FVELER environment. Each instance pairs an Isabelle proof command with a natural-language explanation describing how that command transforms the current proof state, including changes to goals and hypotheses. This dataset is used to fine-tune AutoReal-Prover via instruction tuning, teaching the model to generate coherent sequences of proof steps alongside interpretable rationales. The dataset's grounding in real industrial verification artifacts distinguishes it from mathematics-oriented benchmarks and enables the model to learn patterns specific to systems verification proofs.
