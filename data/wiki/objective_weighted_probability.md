---
id: objective_weighted_probability
label: Objective-Weighted Probability
type: concept
---

# Objective-Weighted Probability

**Type:** concept

A generalized probability measure over the sampling tree that incorporates both filter selection and objective-based weighting to account for semantic or structural properties.

---

Objective-weighted probability is a generalized probability measure over the sampling tree that combines the effects of the filter function and the objective function to assign weights to sequences that reflect both their likelihood and their relationship to a reference output. Rather than summing raw token probabilities, the objective-weighted probability rescales contributions according to the degree of agreement or similarity indicated by the objective function, incorporating semantic or structural properties into the probability calculation. This measure forms the basis for computing objective-weighted entropy and allows the framework to unify syntactic and semantic notions of uncertainty within a single probabilistic formalism. It generalizes standard conditional probability as a special case when the objective function reduces to syntactic equality.
