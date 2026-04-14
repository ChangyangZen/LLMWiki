---
id: termination_conditions
label: Termination Conditions (Ψ)
type: concept
---

# Termination Conditions (Ψ)

**Type:** concept

Conditions in an Agent Contract that end execution regardless of progress, including resource exhaustion, duration expiration, explicit cancellation, and unrecoverable errors.

---

Termination Conditions (Ψ) are a set of conditions within an Agent Contract that halt agent execution regardless of task progress or proximity to fulfillment. These conditions include resource exhaustion across any constrained dimension, contract duration expiration, explicit external cancellation, and the occurrence of unrecoverable errors during execution. Ψ serves as a safety net that prevents runaway agent behavior by guaranteeing that execution will always stop under adverse conditions, even when success criteria have not been met. The triggering of any termination condition causes the contract lifecycle to transition to either the VIOLATED or TERMINATED state, providing clear auditability of why execution ceased.
