---
id: autogen
label: AutoGen
type: model
---

# AutoGen

**Type:** model

A multi-agent LLM orchestration framework used as a runtime inference baseline, consuming 805 tokens per transaction and incurring 57x higher costs than compiled AI at scale.

---

AutoGen is a multi-agent LLM orchestration framework developed by Microsoft that enables the construction of conversational agent pipelines in which multiple model instances collaborate to complete complex tasks through iterative dialogue. In the compiled AI benchmarking study, AutoGen is used as a runtime inference baseline, consuming approximately 805 tokens per transaction and incurring costs approximately 57 times higher than the compiled AI approach at comparable transaction volumes. Its per-request model invocation architecture makes it representative of the class of systems that prioritize runtime flexibility and emergent reasoning over determinism and cost efficiency. AutoGen's overhead reflects both task-specific prompt construction and the multi-turn coordination messages exchanged between agents.
