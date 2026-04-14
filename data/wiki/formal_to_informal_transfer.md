---
id: formal_to_informal_transfer
label: Formal-to-Informal Transfer
type: concept
---

# Formal-to-Informal Transfer

**Type:** concept

The phenomenon where PRMs trained on formally verified labels for formal reasoning tasks improve performance on informal reasoning tasks written in natural language.

---

Formal-to-informal transfer refers to the empirical phenomenon, observed in the FoVer paper, in which PRMs trained exclusively on reasoning data with formally verified step-level labels demonstrate improved performance when applied to informal reasoning tasks expressed in natural language. This transfer suggests that the step-level reasoning quality signals learned from formal logic and theorem proving tasks capture generalizable notions of inferential correctness that extend beyond the formal domain. The phenomenon is significant because it implies that the expensive process of obtaining informal step-level labels may be partially circumvented by training on formal tasks where automated verification is feasible. FoVer-PRMs exhibit this transfer across diverse informal benchmarks including natural language inference and BIG-Bench Hard tasks.
