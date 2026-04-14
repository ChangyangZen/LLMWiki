---
id: split_cp
label: Split Conformal Prediction
type: method
---

# Split Conformal Prediction

**Type:** method

A variant of conformal prediction that separates model training from threshold calibration using distinct training, calibration, and test partitions.

---

Split conformal prediction is a computationally efficient variant of conformal prediction that partitions available data into separate training, calibration, and test sets to decouple model fitting from threshold calibration. By using a dedicated calibration split to compute nonconformity score thresholds, split conformal prediction avoids the computational expense of full or cross-conformal methods while retaining finite-sample marginal coverage guarantees. This separation also ensures that the calibration procedure is statistically valid and does not leak information from the test distribution. Split conformal prediction is widely used in practice due to its simplicity and scalability, and serves as the foundational mechanism underlying frameworks such as MiCP.
