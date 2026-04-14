---
id: minimal_correction_subsets
label: Minimal Correction Subsets (MCS)
type: method
---

# Minimal Correction Subsets (MCS)

**Type:** method

A technique that identifies the minimal set of atomic claims to remove or revise in order to restore logical consistency, providing actionable feedback.

---

Minimal Correction Subsets (MCS) is a formal technique from the field of constraint satisfaction and maximum satisfiability that identifies the smallest subset of constraints whose removal restores satisfiability to an otherwise inconsistent formula set. Unlike unsatisfiable cores, which identify conflicting subsets, MCS pinpoints exactly which claims are responsible for logical inconsistency in a minimal and actionable way. In VERGE, MCS computation is applied to the set of verified atomic claims to determine precisely which claims should be revised or retracted, providing structured and targeted feedback to the LLM during iterative refinement. This precise error localization distinguishes VERGE from approaches that offer only coarse or unstructured error signals.
