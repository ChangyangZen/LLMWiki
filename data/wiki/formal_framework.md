---
id: formal_framework
label: Formal Uncertainty Framework
type: method
---

# Formal Uncertainty Framework

**Type:** method

A unified formal framework that models LLM text generation uncertainty across prompting, decoding, and interpretation stages using a sampling tree with filter and objective functions.

---

The Formal Uncertainty Framework is a unified mathematical framework introduced to systematically model and measure uncertainty in large language model (LLM) text generation. It decomposes the generation pipeline into three interconnected stages—prompting, decoding, and interpretation—each represented as autoregressive stochastic processes combined into a sampling tree structure. The framework incorporates filter functions to restrict which portions of the sampling tree are relevant and objective functions to define the property with respect to which uncertainty is measured. By providing this unified structure, the framework enables existing uncertainty quantification methods to be expressed as special cases and reveals previously underexplored aspects of LLM uncertainty, such as interpretation uncertainty.
