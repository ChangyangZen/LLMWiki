---
id: langgraph
label: LangGraph
type: model
---

# LangGraph

**Type:** model

A graph-based orchestration framework with explicit state management and checkpointing, compared to Agent Contracts for resource governance features.

---

LangGraph is a graph-based orchestration framework for LLM agents that models agent workflows as directed graphs with explicit state management, conditional branching, and checkpointing capabilities. Its graph-native design enables complex multi-step agent pipelines with well-defined control flow, and its checkpointing features support fault tolerance and workflow resumption. In comparisons with the Agent Contracts framework, LangGraph is noted for its strengths in workflow structure and state persistence, while Agent Contracts contribute formal resource governance, conservation laws, and lifecycle management that LangGraph does not natively provide. The two approaches are positioned as complementary, with Agent Contracts potentially serving as a governance layer deployed atop LangGraph-orchestrated workflows.
