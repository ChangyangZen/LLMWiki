---
id: lego_prover
label: LEGO-Prover
type: method
---

# LEGO-Prover

**Type:** method

A neural theorem proving method using growing libraries that has advanced state-of-the-art proof success rates on the miniF2F benchmark.

---

LEGO-Prover is a neural theorem proving method that employs a dynamically growing library of reusable lemmas to support proof construction, enabling the system to accumulate and leverage previously discovered sub-results during proof search. It has reported state-of-the-art proof success rates on the miniF2F benchmark, contributing to the advancement of LLM-driven formal mathematics. LEGO-Prover's library-growth mechanism is particularly suited to the olympiad-style problems in miniF2F, where modular lemma reuse is a natural proof strategy. In the AutoReal paper, LEGO-Prover is cited as a representative prior method whose strong miniF2F performance does not directly address the challenges of industrial-scale verification benchmarks such as seL4.
