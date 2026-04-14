---
id: metaaggpt
label: MetaGPT
type: method
---

# MetaGPT

**Type:** method

A multi-agent framework using Standard Operating Procedures as essentially compiled workflows, reducing cascading hallucinations by constraining agent behavior.

---

MetaGPT is a multi-agent LLM framework that encodes software engineering Standard Operating Procedures as structured constraints on agent behavior, effectively compiling organizational process knowledge into the coordination layer of a multi-agent system. By reducing the degrees of freedom available to individual agents, MetaGPT substantially decreases cascading hallucination errors that arise when unconstrained agents propagate errors across dialogue turns. The compiled AI paper references MetaGPT as an example of compilation-style thinking applied to multi-agent orchestration, where ahead-of-time specification of procedures substitutes for emergent runtime coordination. MetaGPT's success in reducing hallucination through constraint is conceptually aligned with compiled AI's broader thesis that pre-specifying behavior at compile time improves reliability.
