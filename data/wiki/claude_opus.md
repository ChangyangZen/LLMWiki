---
id: claude_opus
label: Claude Opus 4.5
type: model
---

# Claude Opus 4.5

**Type:** model

The underlying LLM (claude-opus-4-5-20251101) used for code generation in compiled AI and as the inference model in all baseline comparisons, run at temperature 0.

---

Claude Opus 4.5 (model identifier claude-opus-4-5-20251101) is Anthropic's large language model used throughout the compiled AI paper both as the code generation engine during the compile phase and as the inference model for all runtime baseline comparisons. All experiments are conducted at temperature zero to maximize output determinism, ensuring that performance differences between compiled and runtime approaches are attributable to architectural paradigm rather than stochastic variation. The model's strong instruction-following and code generation capabilities make it suitable for producing syntactically valid and functionally correct Temporal workflow artifacts. Using the same underlying model across compiled and baseline conditions controls for model quality as a confounding variable in the evaluation.
