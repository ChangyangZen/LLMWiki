---
id: linc
label: LINC
type: model
---

# LINC

**Type:** model

A neurosymbolic approach combining language models with first-order logic provers for logical reasoning tasks.

---

LINC (Logical Inference via Neurosymbolic Computation) is a neurosymbolic reasoning approach that combines large language models with first-order logic theorem provers to handle tasks requiring rigorous deductive inference. The system translates natural language premises and hypotheses into first-order logic and uses a prover to determine entailment, offering formal correctness guarantees where the translation is accurate. LINC is included as a baseline in the VERGE evaluation suite to represent the class of single-pass neurosymbolic systems that rely on first-order logic provers rather than SMT solvers. Comparing VERGE to LINC highlights the benefits of SMT-based verification with iterative refinement over static first-order logic proof search.
