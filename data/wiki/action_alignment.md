---
id: action_alignment
label: Action Alignment
type: concept
---

# Action Alignment

**Type:** concept

A security property ensuring each individual action at each time step serves the authorized task objective, preventing capability misuse within an otherwise aligned trajectory.

---

Action alignment is a security property that requires each individual action taken by an LLM agent at each time step to serve the authorized task objective, even within a trajectory that is otherwise task-aligned. This property is necessary because an agent could maintain a correct high-level goal while still executing specific steps that are unauthorized, harmful, or unnecessary—a form of capability misuse that task alignment alone cannot detect. Formally, action alignment is evaluated by an oracle function that assesses whether a given action contributes to the authorized objective given the full execution context. Defenses approximating action alignment, such as those evaluated on the AgentDojo benchmark, have been shown to substantially reduce the success rate of targeted attacks.
