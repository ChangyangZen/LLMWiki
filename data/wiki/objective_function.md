---
id: objective_function
label: Objective Function
type: concept
---

# Objective Function

**Type:** concept

A function mapping pairs of token sequences to non-negative real numbers, used to define the property with respect to which uncertainty is measured, such as syntactic equality or semantic similarity.

---

An objective function is a mapping from pairs of token sequences to non-negative real numbers that encodes the property with respect to which uncertainty is being measured. It quantifies the degree of agreement or similarity between two outputs, ranging from strict syntactic equality to soft semantic similarity measures. The choice of objective function determines how the uncertainty measure treats outputs that differ syntactically but may be equivalent or similar in meaning. Common instantiations include syntactic equality, hard semantic clustering, soft kernel-based similarity, and task-specific quality metrics, making the objective function a central design choice in any uncertainty quantification approach within the framework.
