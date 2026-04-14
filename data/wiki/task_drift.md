---
id: task_drift
label: Task Drift
type: concept
---

# Task Drift

**Type:** concept

An attack where an agent's trajectory autonomously diverges from the initial authorized objective without authenticated authorization, violating task alignment through HTr returning 0.

---

Task drift is an attack or failure mode in which an LLM agent's trajectory autonomously diverges from the objective authorized in the initial user prompt, without any authenticated authorization for the change in direction. Within the contextual security framework, task drift is formalized as a task alignment violation detected by the trajectory evaluation function HTr returning zero, indicating that the agent's sequence of actions no longer serves the authorized objective. Drift may occur due to ambiguous instructions, compounding errors in long-horizon tasks, or manipulation through environmental observations that subtly redirect the agent's goal. Unlike jailbreaking or prompt injection, task drift may arise without a clear adversarial actor, making it an important safety concern in addition to a security one.
