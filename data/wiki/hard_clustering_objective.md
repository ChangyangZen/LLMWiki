---
id: hard_clustering_objective
label: Hard Clustering Objective
type: concept
---

# Hard Clustering Objective

**Type:** concept

An objective function that assigns each token sequence to exactly one semantic cluster, expressing semantic entropy-style uncertainty quantification.

---

The hard clustering objective is an objective function in which each token sequence is assigned to exactly one discrete semantic cluster, reflecting the assumption that outputs can be partitioned into mutually exclusive meaning classes. Under this objective, two sequences receive a score of one if they belong to the same cluster and zero otherwise, producing a crisp partition of the output space. This formulation directly corresponds to the clustering step used in semantic entropy, where outputs are grouped by semantic equivalence before entropy is computed over the cluster distribution. The hard clustering objective is appropriate for tasks where outputs can be cleanly categorized, such as question answering with definite correct answers, but may be less suitable when meaning boundaries are gradual or ambiguous.
