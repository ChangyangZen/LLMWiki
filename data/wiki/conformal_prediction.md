---
id: conformal_prediction
label: Conformal Prediction
type: method
---

# Conformal Prediction

**Type:** method

A distribution-free framework for constructing prediction sets with finite-sample coverage guarantees, operating as a post-hoc wrapper around any pre-trained model.

---

Conformal prediction is a distribution-free statistical framework for constructing prediction sets that are guaranteed to contain the true label with a user-specified probability, known as the coverage guarantee. Unlike Bayesian or parametric approaches, conformal prediction requires no assumptions about the underlying data distribution and operates as a post-hoc wrapper around any pre-trained model, making it broadly applicable across machine learning settings. The framework works by computing nonconformity scores on a held-out calibration set and deriving thresholds that control the probability of coverage at test time. Its finite-sample validity and model-agnostic nature have made it increasingly popular for uncertainty quantification in natural language processing and question answering systems.
