---
id: objective_weighted_entropy
label: Objective-Weighted Entropy
type: concept
---

# Objective-Weighted Entropy

**Type:** concept

An entropy measure computed using objective-weighted probabilities, generalizing information-theoretic uncertainty to incorporate semantic objectives.

---

Objective-weighted entropy is an entropy measure computed using objective-weighted probabilities, extending classical information-theoretic entropy to incorporate the semantic or structural considerations encoded in the objective function. By replacing standard token probabilities with objective-weighted probabilities in the entropy formula, this measure captures uncertainty not merely about which token sequence will be generated but about which equivalence class or quality level the output will fall into. It serves as the central uncertainty quantity in the formal framework and subsumes existing measures such as standard token entropy and semantic entropy as special cases corresponding to particular choices of objective function. Objective-weighted entropy provides a principled and flexible tool for comparing and designing uncertainty quantification methods for LLMs.
