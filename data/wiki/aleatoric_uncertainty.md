---
id: aleatoric_uncertainty
label: Aleatoric Uncertainty
type: concept
---

# Aleatoric Uncertainty

**Type:** concept

Irreducible uncertainty inherent to the stochastic nature of the LLM generation process, such as randomness in decoding decisions.

---

Aleatoric uncertainty refers to the irreducible randomness inherent in a stochastic process that cannot be eliminated by gathering more information or refining the model. In the context of LLM text generation, aleatoric uncertainty arises from the fundamental stochasticity of the decoding process, such as the random sampling of tokens according to a probability distribution at each generation step. Within the formal framework, aleatoric uncertainty is associated with the intrinsic variability of the sampling tree's probability structure and is contrasted with epistemic uncertainty, which stems from incomplete knowledge. Because aleatoric uncertainty is irreducible, it sets a lower bound on the uncertainty that any LLM system will exhibit regardless of how much the model is improved or how clearly the prompt is specified.
