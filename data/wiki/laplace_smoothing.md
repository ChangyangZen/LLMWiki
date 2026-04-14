---
id: laplace_smoothing
label: Laplace Smoothing
type: method
---

# Laplace Smoothing

**Type:** method

Valid-transition-aware additive smoothing applied only to semantically valid transitions to address sparse transition data while maintaining logical consistency of the DTMC.

---

Laplace smoothing, also known as additive smoothing, is a statistical technique used to address the problem of zero-probability estimates in learned probabilistic models by adding a small constant to observed transition counts before normalization. In ProbGuard, a valid-transition-aware variant of Laplace smoothing is applied, restricting additive smoothing only to transitions that are semantically valid according to the domain's predicate structure, thereby avoiding the introduction of logically impossible transitions into the learned DTMC. This approach balances the need to handle sparse transition data—particularly for rare or dangerous states that appear infrequently in training traces—with the requirement to maintain logical consistency in the probabilistic model. The resulting smoothed DTMC provides more robust probability estimates for low-frequency transitions that are critical for accurate safety risk prediction.
