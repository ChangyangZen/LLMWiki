---
id: token_elasticity
label: Token Elasticity
type: concept
---

# Token Elasticity

**Type:** concept

The documented phenomenon where LLMs often exceed specified token budgets when constraints are tight, demonstrating that prompting alone is insufficient for strict enforcement.

---

Token Elasticity is a documented behavioral phenomenon in large language models wherein the model generates more tokens than specified by a budget constraint when that constraint is communicated only through prompting. Research on token-budget-aware reasoning, particularly the TALE framework, identified this effect as a fundamental limitation of soft enforcement strategies: models acknowledge budget instructions in their outputs but nonetheless exceed them when tasks are complex or budgets are tight. Token elasticity provides the empirical motivation for hard enforcement mechanisms in the Agent Contracts framework, demonstrating that structural external monitoring and halting are necessary to guarantee strict compliance. The phenomenon highlights a gap between the instruction-following capabilities of current LLMs and the reliability requirements of production agentic deployments.
