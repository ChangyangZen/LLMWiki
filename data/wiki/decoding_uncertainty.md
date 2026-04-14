---
id: decoding_uncertainty
label: Decoding Uncertainty
type: concept
---

# Decoding Uncertainty

**Type:** concept

Uncertainty inherent in the token-by-token generation process of LLMs due to stochastic sampling strategies such as nucleus sampling and temperature scaling.

---

Decoding uncertainty is the inherent stochasticity introduced during the token-by-token generation process of an LLM, arising from probabilistic sampling strategies applied at each decoding step. Strategies such as nucleus sampling and temperature scaling introduce randomness by sampling from a distribution over the vocabulary rather than always selecting the most probable token. Within the formal framework, decoding uncertainty is captured by the branching structure and edge probabilities of the sampling tree corresponding to the LLM output stage. This form of uncertainty is considered aleatoric in nature, as it is irreducible given a fixed model and sampling strategy, and it underlies many of the challenges in producing consistent and reliable LLM outputs.
