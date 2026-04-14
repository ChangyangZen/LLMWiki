---
id: code_factory
label: Code Factory
type: model
---

# Code Factory

**Type:** model

A compiled AI variant that wraps focused LLM calls as compiled code artifacts rather than constructing prompts per-request, bridging deterministic and semantic extraction tasks.

---

Code Factory is a compiled AI architectural variant designed to handle tasks that require semantic reasoning or probabilistic extraction alongside deterministic logic. Rather than constructing a new prompt for each incoming request at runtime, Code Factory wraps focused, narrowly scoped LLM calls as compiled code artifacts, allowing selective invocation of language models only where deterministic rules are insufficient. This design bridges the gap between fully deterministic compiled workflows and the semantic flexibility needed for tasks such as fuzzy field extraction from heterogeneous documents. Code Factory is particularly relevant in document intelligence settings where some fields resist purely rule-based extraction.
