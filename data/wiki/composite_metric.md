---
id: composite_metric
label: Composite Evaluation Metric
type: metric
---

# Composite Evaluation Metric

**Type:** metric

A new metric introduced in this paper that jointly evaluates coverage validity and answering efficiency by balancing average turns against the ratio of correct to incorrect stopping decisions.

---

The composite evaluation metric is a novel joint evaluation criterion introduced in the MiCP paper to simultaneously assess coverage validity and answering efficiency in multi-turn reasoning systems. It combines the average number of reasoning turns taken with the ratio of correct early stopping decisions to incorrect ones, penalizing systems that either stop too early and produce wrong answers or run unnecessarily long without benefit. This metric addresses the limitation of evaluating coverage and efficiency separately, which can obscure trade-offs between the two objectives. The composite metric is also used as the optimization target during the grid search over per-turn error budget allocations in MiCP.
