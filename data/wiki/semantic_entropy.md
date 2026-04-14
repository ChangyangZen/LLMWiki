---
id: semantic_entropy
label: Semantic Entropy
type: method
---

# Semantic Entropy

**Type:** method

An uncertainty estimation approach that groups semantically equivalent outputs into clusters and computes entropy over these clusters rather than over syntactically distinct outputs.

---

Semantic entropy is an uncertainty estimation method for LLMs that addresses the limitation of token-level entropy by grouping semantically equivalent outputs into clusters before computing entropy. Rather than treating each syntactically distinct output as a separate event, semantic entropy assigns outputs to equivalence classes based on their meaning and computes entropy over the distribution of these classes. This approach reduces the overestimation of uncertainty that occurs when multiple outputs express the same semantic content in different words. Within the formal framework, semantic entropy is expressed as a special case using a hard clustering objective function that maps token sequences to discrete semantic cluster identifiers.
