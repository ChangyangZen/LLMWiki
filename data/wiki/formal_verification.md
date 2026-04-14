---
id: formal_verification
label: Formal Verification
type: concept
---

# Formal Verification

**Type:** concept

The use of automated tools to formally verify the correctness of solutions to formal reasoning tasks, enabling accurate step-level error labeling without human intervention.

---

Formal verification refers to the use of automated mathematical tools to rigorously check the correctness of solutions or proofs with respect to a formal specification or set of rules. In the context of the FoVer framework, formal verification is applied at the step level, allowing each intermediate reasoning step in a multi-step solution to be labeled as correct or erroneous without requiring human judgment. Tools such as the Z3 SMT solver and Isabelle/HOL provide deterministic verdicts grounded in formal logic, making them highly reliable sources of ground-truth labels. This approach enables scalable and accurate synthesis of PRM training data at a fraction of the cost of human annotation or Monte Carlo-based methods.
