---
id: proof_success_rate
label: Proof Success Rate
type: metric
---

# Proof Success Rate

**Type:** metric

The proportion of theorems for which AutoReal-Prover generates a proof script accepted by the Isabelle proof checker within a budget of up to 256 attempts.

---

Proof Success Rate is the primary evaluation metric used in the AutoReal paper, defined as the proportion of target theorems for which the model generates at least one proof script that is fully accepted by the Isabelle/HOL proof checker within a budget of up to 256 generation attempts per theorem. This metric captures end-to-end proof correctness as validated by an external formal verifier, ensuring that reported successes correspond to genuinely valid proofs rather than plausible-looking but unverified outputs. AutoReal-Prover achieves a 51.67% proof success rate on 660 seL4 theorems and a 53.88% rate on AFP security projects, compared to the prior best of 27.06% by Selene on a subset of seL4 theorems. The use of multiple attempts reflects standard practice in stochastic proof search and allows the model to explore diverse proof strategies.
