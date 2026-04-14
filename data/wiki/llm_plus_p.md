---
id: llm_plus_p
label: LLM+P
type: method
---

# LLM+P

**Type:** method

A hybrid neural-symbolic planning approach that translates natural language to PDDL and delegates execution to classical planners, serving as a compilation paradigm antecedent.

---

LLM+P is a hybrid neural-symbolic planning approach that uses a large language model to translate natural language problem descriptions into Planning Domain Definition Language (PDDL) representations, which are then solved by classical automated planners rather than the language model itself. By delegating the combinatorial search component to a deterministic symbolic solver, LLM+P achieves more reliable and verifiable planning outcomes than end-to-end neural approaches. The method represents an early and influential example of using LLMs as a compilation front-end that produces structured, machine-executable artifacts, situating it as a conceptual precursor to the compiled AI paradigm. The compiled AI paper references LLM+P as part of a broader lineage of work separating the generative and execution phases of AI-driven task completion.
