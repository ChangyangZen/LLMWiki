---
id: gpt4
label: GPT-4
type: model
---

# GPT-4

**Type:** model

A large closed-source language model with hundreds of billions of parameters used in prior work such as Selene for seL4 theorem proving, requiring substantial API costs and unable to be locally deployed.

---

GPT-4 is a large closed-source language model developed by OpenAI, estimated to contain hundreds of billions of parameters, and is known for strong performance across a wide range of reasoning and code generation tasks. In the context of seL4 theorem proving, GPT-4 was used as the backbone model in the Selene system, which achieved a 27.06% proof success rate on 340 seL4 theorems. Despite its considerable capabilities, GPT-4's closed-source nature, high API costs, and inability to be locally deployed present practical barriers for industrial-scale verification workflows with data confidentiality requirements. AutoReal-Prover, a fine-tuned 7B-parameter model, substantially outperforms GPT-4-based Selene on seL4 benchmarks while supporting lightweight local deployment.
