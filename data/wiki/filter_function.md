---
id: filter_function
label: Filter Function
type: concept
---

# Filter Function

**Type:** concept

A function mapping token sequences to natural numbers that restricts which parts of the sampling tree are considered during uncertainty estimation.

---

A filter function is a mapping from token sequences to natural numbers that determines which nodes or paths in the sampling tree are considered during uncertainty estimation. By selecting specific subtrees or sets of sequences, filter functions allow the framework to focus on relevant portions of the generation process, such as outputs of a fixed length, sequences within a nucleus sampling threshold, or responses to a particular prompt prefix. Different choices of filter function correspond to different practical constraints or assumptions about the generation scenario, such as restricting attention to complete sentences or to the top-k most probable continuations. Filter functions thus provide a flexible mechanism for scoping uncertainty analysis to the portions of the sampling tree that are meaningful for a given task.
