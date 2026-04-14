---
id: z3_solver
label: Z3 Solver
type: model
---

# Z3 Solver

**Type:** model

A specific SMT solver used in VERGE for checking satisfiability, entailment, and consistency of formalized logical claims.

---

Z3 is a high-performance SMT solver developed by Microsoft Research, widely regarded as one of the most capable and versatile automated theorem provers available. It supports a broad range of logical theories including linear arithmetic, bit-vectors, arrays, and uninterpreted functions, and is accessible through APIs in multiple programming languages. Within the VERGE framework, Z3 serves as the primary verification engine, checking the satisfiability and mutual consistency of SMT-LIB2 formulas generated through autoformalization of atomic claims. Z3 is also used to verify semantic equivalence between candidate formalizations produced by different LLMs, enabling robust multi-model consensus.
