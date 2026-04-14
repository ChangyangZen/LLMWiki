---
id: top_k_sampling
label: Top-k Sampling
type: method
---

# Top-k Sampling

**Type:** method

A decoding and estimation strategy that restricts the branching factor of the sampling tree to the k most probable tokens at each step.

---

Top-k sampling is a decoding and uncertainty estimation strategy that limits the branching factor of the sampling tree at each generation step to the k tokens with the highest conditional probabilities. By truncating the vocabulary to a fixed-size set of the most probable candidates, top-k sampling reduces computational cost and prevents very low-probability tokens from being sampled, often improving the coherence of generated text. Within the formal framework, top-k sampling corresponds to a filter function that retains only the k highest-probability edges at each node of the sampling tree. It is one of several standard sampling strategies that can be expressed as special cases of the filter function mechanism.
