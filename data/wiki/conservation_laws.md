---
id: conservation_laws
label: Conservation Laws
type: concept
---

# Conservation Laws

**Type:** concept

Formal invariants ensuring that the sum of all delegated sub-agent resource budgets does not exceed the parent contract's budget, enforcing budget discipline in hierarchical multi-agent systems.

---

Conservation Laws are formal invariants in the Agent Contracts framework that govern resource allocation in hierarchical multi-agent delegation systems. The central conservation property requires that the sum of all resource budgets assigned to delegated sub-agent contracts must not exceed the resource budget of the parent contract, ensuring that no additional resources are created through the act of delegation. This constraint prevents resource amplification attacks and enforces budget discipline across arbitrarily deep orchestrator-worker hierarchies. Empirical validation in a three-agent research pipeline experiment across 50 topics confirmed zero conservation violations, demonstrating that the invariants are practically enforceable in realistic multi-agent deployments.
