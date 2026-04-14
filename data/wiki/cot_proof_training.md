---
id: cot_proof_training
label: CoT-Based Proof Training
type: method
---

# CoT-Based Proof Training

**Type:** method

A training approach that pairs individual Isabelle proof steps with natural-language explanations of their effect on the proof state, enabling the model to internalize proof-state evolution during proof construction.

---

CoT-Based Proof Training is a supervised fine-tuning approach introduced in AutoReal that augments standard proof step prediction with natural-language explanations of how each Isabelle tactic transforms the current proof state. By pairing individual proof commands with descriptions of their effect on goals, hypotheses, and intermediate states, the model learns to internalize the sequential evolution of proof states during proof construction. This training strategy is implemented using approximately 200,000 step-level chain-of-thought instances extracted from seL4 proof traces, forming the Proof CoT Dataset. The technique improves both proof success rates and the interpretability of generated proofs, allowing practitioners to inspect the model's reasoning at each step.
