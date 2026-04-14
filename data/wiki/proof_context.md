---
id: proof_context
label: Proof Context
type: concept
---

# Proof Context

**Type:** concept

The collection of auxiliary definitions and previously proved lemmas that are relevant to a target theorem and necessary for completing its proof in industrial-scale verification projects.

---

Proof Context refers to the collection of auxiliary information—including type definitions, function declarations, axioms, and previously proved lemmas—that is relevant to and required for constructing the proof of a target theorem in a large-scale formal verification project. In industrial settings such as seL4, proofs are deeply interdependent, and a theorem's proof typically relies on dozens of definitions and lemmas distributed across a large codebase that a model cannot be expected to have memorized. The Context Augmentation component of AutoReal addresses this challenge by automatically retrieving and supplying relevant proof context to the language model as part of its input, replicating the information access that human verifiers enjoy when working interactively with a proof assistant. Providing adequate proof context is identified in the AutoReal paper as a critical factor distinguishing industrial-scale theorem proving from self-contained benchmark tasks.
