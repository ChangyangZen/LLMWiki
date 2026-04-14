---
id: token_budget_decomposition
label: Token Budget Decomposition
type: method
---

# Token Budget Decomposition

**Type:** method

A monitoring technique that separates LLM token consumption into input, reasoning, and output categories to enable fine-grained tracking and adaptation.

---

Token Budget Decomposition is a monitoring technique in the Agent Contracts framework that separates an LLM's total token consumption into three distinct categories: input tokens, reasoning tokens, and output tokens. This fine-grained decomposition enables more precise tracking of where token budgets are being consumed within a single agent action, supporting targeted adaptation strategies such as reducing chain-of-thought verbosity independently from output length. The technique is particularly relevant for modern reasoning-oriented language models that produce extended internal reasoning traces before generating visible outputs, as these traces can constitute a significant and previously opaque fraction of total token usage. By making all three consumption categories visible and independently constrainable, token budget decomposition enhances the precision of both soft and hard enforcement mechanisms.
