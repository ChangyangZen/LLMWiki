---
id: compositional_security
label: Compositional Security
type: concept
---

# Compositional Security

**Type:** concept

An open research challenge where individually safe actions combine to create security violations through their composition, requiring reasoning about how environment state changes accumulate across action sequences.

---

Compositional security refers to the open research challenge in which a sequence of individually authorized and seemingly benign agent actions combines to produce an outcome that constitutes a security violation, even though no single action in the sequence would be flagged as insecure in isolation. This challenge arises because agent actions modify environment state, and the cumulative effect of those modifications may enable capabilities or information flows that were not anticipated when each action was individually evaluated. Within the contextual security framework, compositional security violations require reasoning about how the execution context—particularly the environment state and memory components—evolves across the full trajectory, not just at each individual time step. Addressing compositional security is identified as a fundamental limitation of action-level evaluation approaches and a key direction for future work in formal agent security.
