---
id: semantic_routing
label: Semantic Routing
type: method
---

# Semantic Routing

**Type:** method

A routing mechanism that directs different claim types to appropriate verification strategies: SMT solvers for logical claims and LLM ensembles for commonsense claims.

---

Semantic routing is a mechanism within the VERGE framework that classifies atomic claims according to their type and directs each to the most appropriate verification strategy. Claims that are amenable to formal logical reasoning, such as those involving quantifiers, arithmetic, or explicit logical relationships, are routed to the SMT solver for hard verification. Claims involving commonsense knowledge, vague predicates, or world facts that resist formalization are instead routed to an ensemble of LLM judges for soft verification through consensus voting. This dual-path architecture allows VERGE to handle the heterogeneous nature of real-world reasoning outputs without forcing all claims through a single verification modality.
