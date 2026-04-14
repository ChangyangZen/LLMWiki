---
id: claim_decomposition
label: Claim Decomposition
type: method
---

# Claim Decomposition

**Type:** method

The process of breaking down LLM-generated answers into atomic claims that can be individually verified and classified.

---

Claim decomposition is the initial processing step in the VERGE framework in which a full LLM-generated answer is broken down into a set of discrete, atomic claims that can be individually analyzed and verified. Each atomic claim is intended to express a single logical assertion, making it possible to isolate specific points of inconsistency or error within a complex multi-sentence response. Following decomposition, each claim is classified according to its type to determine the appropriate verification pathway through semantic routing. This granular representation of answers enables the precise error localization that distinguishes VERGE from holistic answer-level evaluation approaches.
