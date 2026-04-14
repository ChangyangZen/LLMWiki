---
id: objective_evaluation_functions
label: Objective Evaluation Functions (Hp, HTr, Ha)
type: method
---

# Objective Evaluation Functions (Hp, HTr, Ha)

**Type:** method

A set of oracle functions that quantify task objectives at different levels: extracting objectives from user prompts, evaluating trajectory alignment, and evaluating individual action alignment.

---

The Objective Evaluation Functions are a set of three oracle functions—Hp, HTr, and Ha—that quantify task objectives and alignment at different levels of granularity within the contextual security framework. Hp extracts the authorized objective from the user's prompt, producing a representation of what the user intended the agent to accomplish. HTr evaluates whether the agent's overall trajectory is consistent with that authorized objective, while Ha evaluates whether each individual action serves it. Together, these three functions operationalize both task alignment and action alignment, and their separation reflects the insight that high-level goal alignment and step-level action alignment are distinct security concerns that can be violated independently.
