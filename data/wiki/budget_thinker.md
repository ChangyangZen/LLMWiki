---
id: budget_thinker
label: BudgetThinker
type: method
---

# BudgetThinker

**Type:** method

A budget-aware LLM reasoning approach using control tokens injected during inference with reinforcement learning to achieve precise budget adherence.

---

BudgetThinker is a budget-aware LLM reasoning approach that achieves precise token budget adherence by injecting control tokens into the model during inference, with the model trained through reinforcement learning to respect these budget signals. Unlike prompt-only methods such as TALE, BudgetThinker modifies the inference process itself, enabling tighter and more reliable compliance with specified token limits across a range of reasoning tasks. This approach represents a training-time intervention on model behavior rather than a runtime governance layer, situating it as a complementary technique to the structural enforcement mechanisms proposed in the Agent Contracts framework. BudgetThinker's results demonstrate that combining model-level budget sensitivity with external enforcement can address the limitations of either approach used in isolation.
