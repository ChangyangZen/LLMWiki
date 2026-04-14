---
id: temporal
label: Temporal Workflow Engine
type: method
---

# Temporal Workflow Engine

**Type:** method

The workflow orchestration platform used to deploy compiled AI artifacts as deterministic activities with retry policies and audit logging.

---

Temporal is an open-source workflow orchestration platform used in the compiled AI system to deploy and execute generated code artifacts as durable, reliable workflow activities. It provides built-in support for retry policies, activity timeouts, and event sourcing, ensuring that compiled AI workflows are fault-tolerant and recoverable in the event of transient infrastructure failures. Temporal's execution model aligns naturally with compiled AI's deterministic artifact approach, as each compiled activity is a stateless, idempotent function that can be replayed or retried without side effects. The platform also provides comprehensive audit logging of all workflow executions, supporting the compliance and auditability requirements of regulated industries such as healthcare.
