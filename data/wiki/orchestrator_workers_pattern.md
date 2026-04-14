---
id: orchestrator_workers_pattern
label: Orchestrator-Workers Pattern
type: concept
---

# Orchestrator-Workers Pattern

**Type:** concept

A multi-agent coordination pattern where a central orchestrator decomposes tasks, issues subcontracts to worker agents, and synthesizes results while enforcing conservation laws.

---

The Orchestrator-Workers Pattern is a multi-agent coordination architecture in which a central orchestrator agent decomposes a complex task into subtasks, issues subcontracts to specialized worker agents, and synthesizes their outputs into a final result. Within the Agent Contracts framework, this pattern is formalized through conservation laws that require the sum of all worker subcontract budgets to remain within the orchestrator's own contract budget, enforcing resource discipline across the delegation hierarchy. The pattern mirrors classical manager-contractor relationships from the Contract Net Protocol and is widely implemented in contemporary multi-agent frameworks such as AutoGen and LangGraph. Agent Contracts add formal governance to this pattern by ensuring that neither the orchestrator nor its workers can exceed their allocated resource envelopes, preventing runaway consumption in complex pipelines.
