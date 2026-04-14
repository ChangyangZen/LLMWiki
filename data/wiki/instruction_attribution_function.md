---
id: instruction_attribution_function
label: Instruction Attribution Function (I)
type: method
---

# Instruction Attribution Function (I)

**Type:** method

An oracle function that identifies which inputs functioned as instructions leading to a given agent action, requiring causal attribution over the agent's full context.

---

The Instruction Attribution Function, denoted I, is an oracle function that identifies which subset of the agent's inputs functionally operated as instructions leading to a specific action, requiring causal and semantic attribution over the agent's complete execution context. Unlike simple pattern matching, I must determine which inputs the agent treated as directives rather than as data to be processed, a distinction that is non-trivial when instructions are embedded within environmental content. Accurate instruction attribution is foundational to verifying source authorization, since one must first know which inputs served as instructions before determining whether those inputs originated from authorized sources. The difficulty of approximating I in practice is a key reason why defenses based on prompt engineering or input filtering have fundamental limitations.
