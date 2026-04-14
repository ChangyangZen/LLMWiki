---
id: autoreal_prover
label: AutoReal-Prover
type: model
---

# AutoReal-Prover

**Type:** model

A compact 7B-parameter model fine-tuned from Qwen2.5-Coder-7B using the AutoReal methodology, specialized for industrial-scale theorem proving with support for lightweight local deployment.

---

AutoReal-Prover is a compact 7B-parameter language model specialized for industrial-scale theorem proving in Isabelle/HOL, fine-tuned from the Qwen2.5-Coder-7B base model using the AutoReal methodology. It is trained on a dataset of approximately 200,000 step-level chain-of-thought instances derived from seL4 proof traces, enabling it to generate interleaved proof commands and natural-language rationales. Despite its small parameter count relative to large closed-source models such as GPT-4, AutoReal-Prover achieves a 51.67% proof success rate on 660 seL4 theorems and a 53.88% success rate on security-related Archive of Formal Proofs projects. Its compact size supports lightweight local deployment, reducing the API costs and privacy concerns associated with cloud-based large language models.
