---
id: autoformalization
label: Autoformalization
type: method
---

# Autoformalization

**Type:** method

The process of automatically translating natural language claims into formal SMT-LIB2 logical representations using an LLM.

---

Autoformalization is the process of automatically translating natural language statements into precise formal logical representations, a longstanding challenge at the intersection of natural language processing and formal methods. In the VERGE pipeline, autoformalization is performed by an LLM that converts each atomic claim into a corresponding SMT-LIB2 formula suitable for verification by the Z3 solver. To improve robustness, multiple candidate formalizations are generated and their mutual semantic equivalence is checked via the SMT solver before a consensus formalization is selected. The reliability of this step is constrained by the formalization barrier, as models below approximately 70 billion parameters frequently produce syntactically invalid SMT code.
