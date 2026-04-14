---
id: self_consistency
label: Self-Consistency
type: method
---

# Self-Consistency

**Type:** method

A prompting strategy that generates multiple reasoning paths and selects the most consistent answer through majority voting.

---

Self-consistency is a decoding and prompting strategy for large language models in which multiple independent reasoning chains are generated for the same problem and the final answer is selected by majority vote or aggregation across those chains. Originally proposed by Wang et al., the method exploits the observation that correct reasoning paths tend to converge on the same answer even when the intermediate steps differ, while incorrect paths are more variable. Self-consistency is used as a baseline in VERGE evaluations to contextualize the performance gains achieved by formal verification and iterative refinement relative to a strong sampling-based approach. Unlike VERGE, self-consistency does not identify or correct specific logical errors but relies purely on statistical consensus.
