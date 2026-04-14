---
id: early_stopping
label: Adaptive Early Stopping
type: concept
---

# Adaptive Early Stopping

**Type:** concept

The mechanism in MiCP that allows the model to terminate multi-turn reasoning before exhausting the full turn budget when sufficient confidence is reached.

---

Adaptive early stopping in the context of MiCP refers to the mechanism by which a multi-turn reasoning pipeline terminates before exhausting its maximum turn budget when the model reaches sufficient confidence in its current answer. Rather than always running for a fixed number of retrieval or reasoning steps, early stopping allows the system to save inference cost on questions that can be resolved quickly while reserving additional turns for harder instances. In MiCP, the decision to stop at a given turn is governed by comparing a normalized entropy uncertainty signal against a calibrated per-turn threshold derived from conformal prediction. This adaptive behavior is a central contribution of MiCP, enabling efficiency gains without sacrificing formal coverage guarantees.
