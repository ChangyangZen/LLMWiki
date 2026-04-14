---
id: grid_search
label: Grid Search Optimization
type: method
---

# Grid Search Optimization

**Type:** method

The optimization procedure in MiCP that searches over per-turn error budget allocations to minimize the composite evaluation metric on a held-out optimization set.

---

Grid search optimization is the procedure used by MiCP to identify the best allocation of the total conformal error budget alpha across the individual reasoning turns of a multi-turn pipeline. A discrete grid of possible per-turn error budget combinations is enumerated, and each candidate allocation is evaluated on a held-out optimization set by computing the composite evaluation metric that balances coverage validity against answering efficiency. The allocation that minimizes the composite metric while satisfying the coverage constraint is selected and then applied during test-time conformal calibration and evaluation. This data-driven optimization step enables MiCP to adapt its error budget distribution to the specific characteristics of the underlying model, dataset, and reasoning pipeline.
