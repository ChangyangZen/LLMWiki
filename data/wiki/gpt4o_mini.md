---
id: gpt4o_mini
label: GPT-4o-mini
type: model
---

# GPT-4o-mini

**Type:** model

A compact OpenAI model used as one of three backbone LLMs in MiCP experiments to demonstrate cross-model generalizability.

---

GPT-4o-mini is a compact, cost-efficient language model from OpenAI that retains much of the capability of larger GPT-4 class models while reducing inference latency and cost. In the MiCP paper, GPT-4o-mini is used as one of three backbone LLMs to evaluate the framework's coverage guarantees and early stopping efficiency across five question answering benchmarks. Its inclusion as a proprietary, API-accessed model alongside open-source alternatives demonstrates that MiCP is applicable regardless of whether the underlying model is accessible for weight-level inspection. Results with GPT-4o-mini support the claim that MiCP generalizes across model families and deployment settings.
