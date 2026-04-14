---
id: qwen_math_prm
label: Qwen2.5-Math-PRM-7B
type: model
---

# Qwen2.5-Math-PRM-7B

**Type:** model

An existing PRM based on Qwen 2.5 7B trained on labels synthesized using Monte Carlo roll-outs and verification by a stronger model.

---

Qwen2.5-Math-PRM-7B is an existing process reward model based on the Qwen 2.5 7B architecture, trained on step-level labels synthesized using a combination of Monte Carlo roll-outs and verification by a stronger teacher model, with a focus on mathematical reasoning tasks. It is considered a strong baseline PRM in the math domain due to its training methodology and the mathematical capabilities of the underlying Qwen 2.5 model family. In the FoVer paper, Qwen2.5-Math-PRM-7B serves as the primary comparison point for the Qwen-based FoVer-PRM in Best-of-K evaluations across 12 benchmarks. The comparison highlights the competitiveness of FoVer-PRMs trained on formally verified data relative to models trained with more computationally intensive label acquisition methods.
