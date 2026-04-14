---
id: jailbreaking
label: Jailbreaking
type: concept
---

# Jailbreaking

**Type:** concept

An attack where authenticated users craft prompts to elicit responses that violate safety constraints, formalized as a task alignment violation where the requested objective falls outside the allowed objective space O.

---

Jailbreaking refers to attacks in which authenticated users craft prompts designed to elicit agent responses or behaviors that violate built-in safety constraints, content policies, or operator-defined restrictions. The contextual security framework formalizes jailbreaking as a task alignment violation in which the objective embedded in the user's prompt falls outside the allowed objective space O that the agent is authorized to pursue. Because the user is an authenticated source, jailbreaking does not violate source authorization, highlighting that authentication alone is insufficient to guarantee security. Defenses against jailbreaking, such as RLHF and Constitutional AI, function within the framework as mechanisms for defining and enforcing the boundaries of the allowed objective space O.
