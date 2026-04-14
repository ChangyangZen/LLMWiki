---
id: iterative_refinement
label: Iterative Refinement
type: method
---

# Iterative Refinement

**Type:** method

The process of repeatedly generating, verifying, and refining LLM answers based on structured feedback until acceptance criteria are met or convergence is achieved.

---

Iterative refinement is the core operational loop of the VERGE framework, in which an LLM-generated answer undergoes repeated cycles of claim decomposition, verification, feedback generation, and re-generation until the answer meets acceptance criteria or a convergence limit is reached. After each verification pass, structured feedback identifying inconsistent or incorrect claims is returned to the LLM, which then produces a revised answer informed by this targeted guidance. This process mirrors the scientific method of hypothesis, test, and revision, grounding LLM outputs in formal logical constraints rather than relying solely on the model's internal consistency. The iterative nature of the framework is responsible for the progressive performance gains observed across benchmarks, culminating in an average 18.7% uplift at convergence.
