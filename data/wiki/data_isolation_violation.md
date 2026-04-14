---
id: data_isolation_violation
label: Cross-Context Information Leakage
type: concept
---

# Cross-Context Information Leakage

**Type:** concept

An attack where information flows across privilege boundaries inappropriately, violating data isolation when a source lacks permission to send data to a destination as defined in the permission graph.

---

Cross-context information leakage is a security violation in which information from one privilege context flows to a destination that the source permission graph does not authorize to receive it, breaching the data isolation property of the contextual security framework. Such violations can occur when an agent retrieves sensitive data from a high-privilege source and inadvertently exposes it through outputs, tool calls, or memory writes accessible to lower-privilege or external parties. Unlike source authorization violations, which concern who may issue instructions, data isolation violations concern which information may flow where, making them a distinct category requiring separate enforcement mechanisms. Detecting and preventing these violations requires tracking information provenance through the source attribution function and enforcing graph-defined flow restrictions at each step of the agent's execution.
