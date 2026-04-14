---
id: fldx2
label: FLDx2 Dataset
type: dataset
---

# FLDx2 Dataset

**Type:** dataset

A dataset for multi-step first-order logic deduction used as the source for the formal logic component of FoVer-40K.

---

FLDx2 is a dataset designed for multi-step first-order logic deduction, in which models must derive logical conclusions from structured sets of premises through sequences of formal inference steps. In the FoVer framework, FLDx2 serves as the primary source of formal logic reasoning tasks used to construct the logic component of the FoVer-40K dataset. LLM-generated solutions to FLDx2 problems are annotated with step-level binary error labels using the Z3 SMT solver, which verifies the logical validity of each deduction step. The formal and structured nature of FLDx2 problems makes them particularly amenable to automated step-level verification, enabling scalable and accurate label generation.
