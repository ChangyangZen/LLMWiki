---
id: error_budget_allocation
label: Error Budget Allocation
type: concept
---

# Error Budget Allocation

**Type:** concept

MiCP's strategy of distributing the total conformal error budget alpha across turns, assigning distinct per-turn budgets to balance early stopping with coverage preservation.

---

Error budget allocation is MiCP's strategy for distributing the total allowable conformal error rate, alpha, across the multiple reasoning turns of a pipeline rather than applying a single global threshold. Each turn is assigned its own error budget, allowing the framework to be more permissive about early stopping at some turns and more conservative at others, depending on what best balances coverage preservation and efficiency. The per-turn budgets are optimized via a grid search procedure over a held-out optimization set, minimizing a composite evaluation metric that jointly captures coverage validity and answering efficiency. This principled allocation of error across turns is what distinguishes MiCP from naive extensions of single-turn conformal methods to multi-turn settings.
