---
id: soft_verification
label: Soft Verification
type: method
---

# Soft Verification

**Type:** method

A consensus-based verification approach using an ensemble of LLM judges for claims unsuitable for formal SMT verification, such as commonsense or vague claims.

---

Soft verification is a consensus-based validation mechanism used in VERGE for atomic claims that are not amenable to formal SMT-based verification, such as those involving commonsense reasoning, subjective judgments, or vague natural language predicates. In this approach, an ensemble of LLM judges independently evaluates each such claim and a majority vote or weighted consensus determines whether the claim is considered verified or contested. The term soft reflects the probabilistic and heuristic nature of this verification compared to the deductive certainty of SMT-based hard verification. Soft verification ensures that VERGE can handle the full spectrum of claim types encountered in open-domain reasoning tasks without discarding claims that resist formalization.
