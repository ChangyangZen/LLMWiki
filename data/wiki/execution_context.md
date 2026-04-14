---
id: execution_context
label: Execution Context
type: concept
---

# Execution Context

**Type:** concept

A tuple capturing all authorization-relevant information at time step t, including user prompt, trajectory, memory, environment state, authenticated sources, and source permission graph.

---

Execution context is a formal tuple that encodes all authorization-relevant information available to an LLM agent at a given time step t, serving as the foundation against which security properties are evaluated. The tuple includes the user's prompt, the agent's trajectory of past actions and observations, its memory state, the current environment state, the set of authenticated sources, and a source permission graph specifying inter-source privileges. Because security is defined relationally, the execution context functions as the reference point that determines whether any particular action is authorized. Changes to any component of this tuple—such as new memory entries or environmental observations—can alter the security status of subsequent agent actions.
