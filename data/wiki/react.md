---
id: react
label: ReAct
type: method
---

# ReAct

**Type:** method

A multi-turn LLM framework that interleaves reasoning steps with external tool actions to gather information before producing a final answer.

---

ReAct is a multi-turn large language model framework that interleaves explicit reasoning traces with external tool-use actions, enabling models to gather information incrementally before committing to a final answer. At each turn, the model produces a thought describing its current reasoning state, selects an action such as a search query or API call, and observes the resulting external feedback before proceeding to the next step. This think-act-observe loop allows ReAct agents to handle complex, knowledge-intensive tasks that require iterative information gathering beyond what is stored in model parameters. ReAct serves as one of the two primary multi-turn reasoning pipelines evaluated in the MiCP framework.
