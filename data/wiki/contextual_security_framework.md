---
id: contextual_security_framework
label: Contextual Security Framework
type: concept
---

# Contextual Security Framework

**Type:** concept

A formal framework that defines agent security as a relational property between an action and its execution context, requiring verification of four security properties simultaneously.

---

The Contextual Security Framework is a formal approach to LLM agent security that defines security as a relational property between an agent's action and its surrounding execution context, rather than as an intrinsic property of any action in isolation. The framework requires simultaneous verification of four distinct security properties—task alignment, action alignment, source authorization, and data isolation—each of which must hold for an agent's behavior to be considered secure at any given time step. By grounding security in context, the framework captures the intuition that the same action may be legitimate in one setting and a violation in another. This approach enables systematic redefinition of known attacks as violations of specific, identifiable properties and allows existing defenses to be understood as approximations of ideal verification procedures.
