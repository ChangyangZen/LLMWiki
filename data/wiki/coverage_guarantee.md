---
id: coverage_guarantee
label: Coverage Guarantee
type: concept
---

# Coverage Guarantee

**Type:** concept

The formal statistical guarantee that a prediction set contains the correct answer with at least 1-alpha probability, maintained by MiCP across all turns.

---

A coverage guarantee is the formal statistical assurance provided by conformal prediction that a constructed prediction set will contain the true label with probability at least one minus alpha over draws from the data distribution, where alpha is a user-specified error rate. This guarantee holds in finite samples and requires only that calibration and test data be exchangeable, making it broadly applicable without parametric assumptions. Coverage guarantees are the central statistical property that distinguishes conformal prediction from heuristic uncertainty quantification methods, providing a rigorous foundation for deployment in high-stakes settings. MiCP is designed to preserve this coverage guarantee across all turns of a multi-turn reasoning pipeline, even when early stopping is applied adaptively.
