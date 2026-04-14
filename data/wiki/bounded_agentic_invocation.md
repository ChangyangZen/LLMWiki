---
id: bounded_agentic_invocation
label: Bounded Agentic Invocation
type: concept
---

# Bounded Agentic Invocation

**Type:** concept

An architectural pattern allowing generated code to call LLMs for specific narrow subtasks while maintaining deterministic overall workflow flow with defined schemas and fallback logic.

---

Bounded Agentic Invocation is an architectural pattern within compiled AI that permits generated workflow code to call a language model for specific, narrowly defined subtasks while preserving the overall deterministic character of the workflow. Rather than allowing open-ended agentic reasoning at runtime, bounded invocations are constrained by predefined input schemas, output schemas, and fallback logic that prevent cascading non-determinism in the event of unexpected model outputs. This pattern is embodied in the Code Factory variant and is exemplified in the prior authorization workflow, where an LLM is invoked only for medical necessity narrative interpretation within a otherwise fully deterministic coverage decision process. Bounded Agentic Invocation enables compiled AI to handle semantically complex subtasks without sacrificing the auditability and reproducibility guarantees of the broader paradigm.
