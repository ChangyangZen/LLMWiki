---
id: llm_as_judge
label: LLM-as-a-Judge
type: method
---

# LLM-as-a-Judge

**Type:** method

An agentic approach where an LLM interprets and evaluates the output of another LLM, representing a source of interpretation uncertainty in the formal framework.

---

LLM-as-a-Judge is an agentic evaluation paradigm in which one large language model is used to assess or score the output of another LLM, serving as an automated substitute for human evaluation. In the formal uncertainty framework, LLM-as-a-Judge is modeled as a source of interpretation uncertainty, since the judging LLM introduces its own stochastic generation process when producing evaluative judgments. This means that the same output may receive different evaluations across multiple invocations of the judge, adding a layer of variability on top of the generation uncertainty already present in the primary LLM. Recognizing LLM-as-a-Judge as a formal stage in the uncertainty pipeline highlights the importance of accounting for evaluation variability when using automated LLM-based assessment in research and deployment settings.
