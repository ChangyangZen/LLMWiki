---
id: confused_deputy
label: Confused Deputy
type: concept
---

# Confused Deputy

**Type:** concept

An attack where the agent exercises its elevated permissions to access resources that the authenticated commanding user lacks permission to access, violating source authorization through privilege escalation.

---

The confused deputy attack occurs when an LLM agent, which possesses elevated permissions by virtue of its role in a system, is manipulated into using those permissions to access or affect resources that the authenticated commanding user is not themselves authorized to access. In the contextual security framework, this is characterized as a source authorization violation in which the agent acts as a proxy that escalates the effective privilege of an unauthorized or lower-privileged source. The attack exploits the gap between the permissions held by the agent and those held by the user on whose behalf it acts, a distinction that context-agnostic security checks cannot capture. Defenses against the confused deputy attack require the agent to reason about the permission graph and verify that the originating source of a request holds sufficient privilege for the requested action.
