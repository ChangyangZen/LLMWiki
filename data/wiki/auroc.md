---
id: auroc
label: AUROC
type: metric
---

# AUROC

**Type:** metric

Area Under the Receiver Operating Characteristic curve, used to measure step-level binary classification performance on ProcessBench.

---

AUROC, or Area Under the Receiver Operating Characteristic curve, is a standard metric for evaluating binary classification models that measures the probability that a randomly chosen positive example is ranked higher than a randomly chosen negative example by the model. It ranges from 0 to 1, with a value of 0.5 indicating random performance and 1.0 indicating perfect discrimination. In the FoVer paper, AUROC is used to evaluate the step-level binary classification performance of PRMs on the ProcessBench benchmark, where positive and negative examples correspond to correct and incorrect reasoning steps respectively. Reporting AUROC provides a threshold-independent measure of how well FoVer-PRMs and baseline models distinguish correct from erroneous reasoning steps.
