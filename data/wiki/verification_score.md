---
id: verification_score
label: Verification Score
type: metric
---

# Verification Score

**Type:** metric

An aggregated score combining individual claim verification results with a variance-based penalty to measure answer quality.

---

The verification score is an aggregated quality metric used in VERGE to evaluate the overall logical consistency of an LLM-generated answer after claim decomposition and verification. It combines the proportion of individual atomic claims that pass verification with a variance-based penalty that discourages answers in which some claims are strongly verified while others remain in doubt, rewarding uniformly consistent responses. The verification score serves as the acceptance criterion in the iterative refinement loop, with answers accepted when their score exceeds a defined threshold or when further refinement fails to improve it. This metric provides a principled and interpretable measure of answer quality that goes beyond simple correctness labels.
