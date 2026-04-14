---
id: contract_lifecycle
label: Contract Lifecycle
type: concept
---

# Contract Lifecycle

**Type:** concept

The state machine governing contract progression through DRAFTED, ACTIVE, FULFILLED, VIOLATED, EXPIRED, and TERMINATED states with formal guard conditions.

---

The Contract Lifecycle is a formal state machine within the Agent Contracts framework that governs the progression of a contract through a well-defined sequence of states: DRAFTED, ACTIVE, FULFILLED, VIOLATED, EXPIRED, and TERMINATED. Each state transition is guarded by formal conditions, such as resource availability checks required to move from DRAFTED to ACTIVE, or the satisfaction of success criteria required to transition to FULFILLED. The lifecycle provides a complete audit trail of contract execution, making it possible to determine not only whether a contract succeeded but also the precise reason for any non-fulfillment. This formal structure supports observability, debugging, and accountability in autonomous agent deployments.
