---
id: fveler
label: FVELER
type: method
---

# FVELER

**Type:** method

A prior interactive formal verification environment using LLMs for theorem proving in seL4, which also provided the proof traces used to construct the CoT dataset in this work.

---

FVELER is a prior interactive formal verification environment that uses large language models for theorem proving within the seL4 project, providing a structured interface between the LLM and the Isabelle proof assistant. It contributes to the AutoReal work by supplying the seL4 proof traces from which the Proof CoT Dataset is constructed, making it a foundational data source for training AutoReal-Prover. FVELER's interaction logs capture step-level proof tactic sequences applied to seL4 theorems, enabling the extraction of paired proof command and proof state transition data. Its prior application to seL4 theorem proving also establishes part of the experimental context against which AutoReal's improvements are measured.
