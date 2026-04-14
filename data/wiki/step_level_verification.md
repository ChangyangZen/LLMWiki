---
id: step_level_verification
label: Step-Level Verification
type: concept
---

# Step-Level Verification

**Type:** concept

The process of verifying the correctness of individual reasoning steps in a multi-step solution, as opposed to only verifying the final answer.

---

Step-level verification is the process of assessing the correctness of each individual intermediate step in a multi-step reasoning solution, as opposed to only evaluating whether the final answer is correct. This fine-grained form of supervision allows errors to be localized within a reasoning chain, which is valuable both for training process reward models and for providing targeted feedback during problem solving. Achieving accurate step-level verification is challenging in informal settings because it typically requires either human annotation or costly automated approximations such as Monte Carlo roll-outs. The FoVer framework addresses this challenge for formal reasoning tasks by applying automated formal verification tools that can deterministically confirm or refute the correctness of each step.
