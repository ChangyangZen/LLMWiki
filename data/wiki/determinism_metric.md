---
id: determinism_metric
label: Execution Determinism
type: metric
---

# Execution Determinism

**Type:** metric

An operational metric measuring output entropy over 1,000 identical inputs; compiled AI achieves H=0 (100% reproducibility) versus 95% for runtime inference at temperature=0.

---

Execution Determinism is an operational metric that quantifies the reproducibility of a workflow system by measuring output entropy over a large number of identical input presentations. In the compiled AI evaluation, compiled artifacts achieve an entropy of H=0 across 1,000 identical inputs, corresponding to 100% output reproducibility, while runtime inference baselines at temperature zero achieve approximately 95% reproducibility due to residual stochasticity in model serving infrastructure. This gap is consequential in regulated industries where identical inputs must always produce identical, auditable outputs to satisfy compliance requirements. The metric operationalizes one of compiled AI's central claimed advantages and provides a quantitative basis for distinguishing the paradigm from temperature-zero runtime inference.
