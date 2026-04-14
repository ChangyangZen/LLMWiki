---
id: theorem_proving_task
label: Formal Theorem Proving Task
type: concept
---

# Formal Theorem Proving Task

**Type:** concept

A task requiring the generation of formal proofs for mathematical statements, verifiable using interactive theorem provers like Isabelle.

---

A formal theorem proving task requires the construction of a rigorous step-by-step proof of a mathematical statement within a formal proof system, where each proof step must conform to the rules of a specific logic or proof calculus. In the FoVer framework, theorem proving tasks are derived from GSM8K math word problems that have been formalized for use with the Isabelle/HOL theorem prover, enabling automated verification of each proof step. Because Isabelle enforces strict logical correctness at every step, these tasks provide a reliable source of step-level binary error labels for PRM training. The inclusion of theorem proving tasks in FoVer-40K complements the formal logic component and broadens the diversity of training data available to FoVer-PRMs.
