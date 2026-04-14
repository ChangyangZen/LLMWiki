---
id: task_alignment
label: Task Alignment
type: concept
---

# Task Alignment

**Type:** concept

A security property ensuring the agent pursues objectives authorized by the user's prompt and that the execution trajectory remains consistent with that authorized objective.

---

Task alignment is a security property that ensures an LLM agent pursues only objectives that have been explicitly or implicitly authorized by the user's prompt, and that the overall trajectory of the agent's execution remains consistent with that authorized objective throughout the task. It is evaluated at two levels: first, by extracting the intended objective from the user's prompt, and second, by checking whether the agent's trajectory as a whole serves that objective. Violations of task alignment correspond to a broad class of attacks including jailbreaking, direct prompt injection, and task drift, where the agent either begins pursuing or gradually drifts toward an unauthorized goal. Task alignment is distinct from action alignment in that it concerns the agent's high-level objective rather than any individual step.
