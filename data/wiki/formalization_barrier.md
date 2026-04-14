---
id: formalization_barrier
label: Formalization Barrier
type: concept
---

# Formalization Barrier

**Type:** concept

A capability threshold where models below ~70B parameters struggle to produce syntactically valid SMT code, limiting formal verification effectiveness.

---

The formalization barrier is an empirically observed capability threshold in the VERGE framework below which language models struggle to reliably produce syntactically valid and semantically correct SMT-LIB2 code from natural language claim descriptions. Models with fewer than approximately 70 billion parameters frequently generate malformed or logically incorrect formalizations, rendering the formal verification pipeline ineffective for those models. This barrier represents a practical constraint on the deployment of neurosymbolic systems that depend on LLM-driven autoformalization as a core component. The authors of VERGE identify the formalization barrier as an important direction for future work, noting that advances in smaller model capabilities or specialized fine-tuning may eventually lower this threshold.
