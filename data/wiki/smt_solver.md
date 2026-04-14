---
id: smt_solver
label: SMT Solver
type: method
---

# SMT Solver

**Type:** method

Satisfiability Modulo Theories solver used to verify logical consistency of formalized claims and compute unsatisfiable cores.

---

A Satisfiability Modulo Theories (SMT) solver is an automated reasoning tool that determines whether a set of logical formulas, expressed in a combination of propositional logic and background theories such as arithmetic or equality, is satisfiable. SMT solvers extend classical Boolean satisfiability by supporting rich theory domains, making them well-suited for verifying complex logical constraints arising from natural language reasoning tasks. In the VERGE framework, an SMT solver is used to check the logical consistency of formalized atomic claims, compute unsatisfiable cores identifying contradictory subsets, and verify entailment relationships between candidate formalizations. The solver's ability to return structured counterexamples and unsatisfiable cores makes it a powerful tool for providing actionable feedback during iterative refinement.
