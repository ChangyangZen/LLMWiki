---
id: semantic_equivalence_checking
label: Semantic Equivalence Checking
type: method
---

# Semantic Equivalence Checking

**Type:** method

A consensus mechanism that uses the SMT solver to verify that different candidate formalizations are logically equivalent, ensuring robust formalization.

---

Semantic equivalence checking is a consensus mechanism used during the autoformalization stage of VERGE to ensure that independently generated logical formalizations of the same natural language claim express the same underlying meaning. Multiple LLMs each produce a candidate SMT-LIB2 formula for a given atomic claim, and the Z3 solver is then queried to determine whether these candidate formulas are logically equivalent under all possible interpretations. Only when a sufficient consensus of equivalence is established is the formalization accepted for use in downstream verification, reducing the risk of verification errors stemming from ambiguous or incorrect translations. This approach leverages the formal precision of the SMT solver to resolve disagreements that a simple string-matching or majority-vote comparison would fail to detect.
