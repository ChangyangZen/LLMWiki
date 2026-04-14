---
id: langchain
label: LangChain
type: model
---

# LangChain

**Type:** model

An LLM agent framework on top of which ProbGuard is implemented, integrating risk alerts and interventions into the agent's planning and action loop.

---

LangChain is a popular open-source framework for building applications powered by Large Language Models, providing abstractions for constructing agent pipelines that integrate LLMs with tools, memory, and external environments. ProbGuard is implemented on top of LangChain, hooking into the agent's planning and action execution loop to inject risk alerts and interventions when probabilistic safety checks indicate elevated risk. The integration allows ProbGuard to operate transparently alongside existing LangChain-based agents without requiring fundamental changes to the agent's core architecture. LangChain's modular design facilitates the insertion of monitoring components between the agent's reasoning and action execution stages.
