---
id: hard_enforcement
label: Hard Enforcement (Agent Harness)
type: method
---

# Hard Enforcement (Agent Harness)

**Type:** method

A structural enforcement layer that externally monitors resource consumption after each agent action and halts execution when constraints are breached, independent of agent cooperation.

---

Hard Enforcement, implemented as an Agent Harness, is a structural enforcement layer in the Agent Contracts framework that externally monitors an agent's resource consumption after each action and halts execution when any constraint is breached. Unlike soft enforcement through prompting, the agent harness operates independently of agent cooperation, intercepting tool calls and LLM invocations to measure actual resource usage against contract budgets. When a resource limit is exceeded, the harness immediately terminates execution and triggers the appropriate lifecycle state transition, ensuring that budget violations are structurally impossible rather than merely discouraged. This mechanism directly addresses the documented phenomenon of token elasticity, wherein LLMs frequently exceed budgets specified only through prompting.
