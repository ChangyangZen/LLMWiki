---
id: self_budgeter
label: SelfBudgeter
type: method
---

# SelfBudgeter

**Type:** method

A method enabling LLMs to predict required token budgets based on task complexity before execution begins.

---

SelfBudgeter is a method that enables large language models to predict the token budget required to complete a given task before execution begins, based on an assessment of task complexity. By generating a budget estimate prior to acting, SelfBudgeter allows agents to proactively allocate resources rather than reactively adjusting to constraints encountered during execution. This capability is relevant to the Agent Contracts framework as a mechanism for informing the initial configuration of resource constraints in the R component, potentially enabling dynamic contract instantiation tailored to specific task instances. SelfBudgeter represents part of a broader research direction toward models that possess metacognitive awareness of their own computational requirements.
