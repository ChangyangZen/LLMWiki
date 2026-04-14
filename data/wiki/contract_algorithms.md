---
id: contract_algorithms
label: Contract Algorithms
type: concept
---

# Contract Algorithms

**Type:** concept

Computation algorithms from real-time systems theory that specify resource budgets before activation, serving as the algorithmic foundation for Agent Contracts.

---

Contract Algorithms are a class of computation algorithms from real-time systems theory, introduced by Dean and Boddy, that require resource budgets to be specified before activation and produce outputs whose quality improves monotonically with additional resources. These algorithms are designed for environments where computation must be interrupted at unpredictable times, guaranteeing that any partial result produced up to the point of interruption is valid and usable. Agent Contracts draw on this theoretical foundation, inheriting the principle that resource envelopes should be declared and committed to prior to execution rather than discovered empirically. This lineage connects the Agent Contracts framework to decades of research in anytime algorithms and resource-bounded computation in artificial intelligence.
