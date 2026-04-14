---
id: temporal_constraints
label: Temporal Constraints (T)
type: concept
---

# Temporal Constraints (T)

**Type:** concept

A component of Agent Contracts specifying activation timestamp and contract duration (time-to-live), enforcing time boundaries on agent execution.

---

Temporal Constraints (T) are a component of the Agent Contracts framework that enforce time boundaries on agent execution by specifying an activation timestamp and a contract duration, commonly referred to as time-to-live (TTL). These constraints ensure that agents do not execute indefinitely, providing a formal mechanism for expiring contracts that exceed their allotted time window regardless of task progress. Temporal constraints interact with the contract lifecycle state machine, triggering transitions to the EXPIRED state when the duration elapses without fulfillment. Together with resource constraints, temporal constraints operationalize bounded rationality by ensuring agents must achieve acceptable outcomes within real-world time limits.
