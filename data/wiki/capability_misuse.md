---
id: capability_misuse
label: Capability Misuse
type: concept
---

# Capability Misuse

**Type:** concept

An attack where an agent uses a legitimate capability in an unauthorized context, violating action alignment (Ha=0) while task alignment holds, demonstrating the contextual nature of capability authorization.

---

Capability misuse is an attack or failure mode in which an LLM agent employs a legitimate tool or capability in a context where its use is not authorized, even though the agent's overall task objective remains aligned with the user's authorized goal. The contextual security framework formalizes this as an action alignment violation—the individual action evaluation function Ha returns zero—while task alignment holds, demonstrating that the two properties are independent and both necessary for comprehensive security. A canonical example is an agent authorized to send emails that sends an email containing sensitive information as a side effect of an otherwise legitimate task. Capability misuse underscores the contextual nature of authorization: whether a capability is permitted depends not only on what it is, but on how and why it is used in a specific execution context.
