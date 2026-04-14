---
id: verge
label: VERGE Framework
type: model
---

# VERGE Framework

**Type:** model

A neurosymbolic framework combining LLMs with SMT solvers for verifiable reasoning through iterative refinement, claim decomposition, and formal verification.

---

VERGE (Formal Refinement and Guidance Engine for Verifiable LLM Reasoning) is a neurosymbolic framework developed by researchers at Amazon Web Services and Case Western Reserve University that integrates Large Language Models with SMT solvers to produce logically consistent, verifiable answers. The system operates through a pipeline that decomposes LLM-generated outputs into atomic claims, autoformalizes them into first-order logic representations, and verifies their consistency using automated theorem proving. Three key innovations distinguish VERGE from prior approaches: multi-model consensus via formal semantic equivalence checking, semantic routing to direct different claim types to appropriate verification strategies, and precise error localization via Minimal Correction Subsets. Evaluated across six reasoning benchmarks including FOLIO, ProofWriter, and ZebraLogic, VERGE achieves an average 18.7% performance uplift at convergence compared to single-pass approaches.
