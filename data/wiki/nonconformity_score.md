---
id: nonconformity_score
label: Nonconformity Score
type: concept
---

# Nonconformity Score

**Type:** concept

A score measuring how unusual a label is for a given input under a model, used in conformal prediction to calibrate coverage thresholds.

---

A nonconformity score is a scalar measure used in conformal prediction to quantify how unusual or surprising a given label is for a particular input under a trained model, with higher scores indicating greater disagreement between the model's predictions and the candidate label. These scores are computed on a held-out calibration set and used to derive a threshold such that future test inputs will have their true label fall within the prediction set with the desired probability. The choice of nonconformity score function significantly influences both the efficiency of the resulting prediction sets and the tightness of the coverage guarantee. In MiCP, normalized entropy serves as the nonconformity score, connecting model uncertainty at each reasoning turn to the conformal calibration procedure.
