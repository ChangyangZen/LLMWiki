---
id: temporal_workflow
label: Temporal Activity
type: concept
---

# Temporal Activity

**Type:** concept

The target output artifact of the compiled AI system, a validated Temporal workflow activity that executes deterministically as static code.

---

A Temporal Activity is the target deployable artifact produced by the compiled AI system, taking the form of a validated workflow activity written for the Temporal distributed workflow orchestration platform. Once generated and validated through the four-stage pipeline, the activity executes as static, deterministic code within Temporal's durable execution model, providing built-in retry semantics, fault tolerance, and auditability without any further model involvement. The choice of Temporal as the execution substrate aligns with enterprise requirements for reliable, long-running business process automation. Compiled AI's output artifacts are thus directly deployable into production workflow infrastructure rather than requiring a separate integration layer.
