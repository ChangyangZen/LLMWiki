---
id: direct_llm
label: Direct LLM
type: model
---

# Direct LLM

**Type:** model

A baseline approach using Claude Opus 4.5 with one model call per transaction, consuming 552 tokens per transaction and serving as the primary comparison point.

---

Direct LLM is a baseline approach evaluated in the compiled AI paper in which a single call to Claude Opus 4.5 is made per transaction without any orchestration framework or multi-agent coordination, consuming approximately 552 tokens per transaction. It represents the simplest possible runtime inference configuration and serves as the primary lower-bound comparison point for assessing the token and cost savings of compiled AI. Despite its simplicity relative to AutoGen or LangChain, the direct LLM baseline still incurs per-transaction model invocation costs that compound significantly at enterprise scale. Its inclusion in the evaluation allows the paper to isolate the overhead attributable to orchestration frameworks from the baseline cost of a single inference call.
