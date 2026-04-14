---
id: processbench
label: ProcessBench
type: dataset
---

# ProcessBench

**Type:** dataset

A benchmark with human-annotated step-level error labels for mathematical reasoning traces, used to evaluate step-level verification performance of PRMs.

---

ProcessBench is an evaluation benchmark containing reasoning traces with human-annotated step-level error labels, designed to assess the ability of models to identify the first erroneous step in a multi-step mathematical reasoning solution. It provides a standardized testbed for comparing the step-level verification capabilities of different PRMs and related models. In the FoVer paper, ProcessBench is used to evaluate FoVer-PRMs and baseline models using the AUROC metric, measuring how well the models distinguish correct from incorrect steps at a fine-grained level. Strong performance on ProcessBench indicates that a PRM has internalized meaningful notions of step-level correctness applicable to mathematical reasoning.
