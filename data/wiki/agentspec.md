---
id: agentspec
label: AgentSpec
type: method
---

# AgentSpec

**Type:** method

A reactive runtime monitoring framework that uses a domain-specific language to specify symbolic enforcement rules for LLM agents, checking safety after each action.

---

AgentSpec is a reactive runtime monitoring framework for LLM agents that provides a domain-specific language for specifying symbolic enforcement rules governing agent behavior. The framework checks agent actions against specified safety rules after each action is proposed, intervening when a rule violation is detected. Unlike ProbGuard, AgentSpec operates reactively rather than proactively, meaning it can only prevent an unsafe action from being executed but cannot anticipate violations multiple steps in advance. AgentSpec serves as an important baseline in the ProbGuard evaluation, representing the state of the art in reactive LLM agent safety monitoring.
