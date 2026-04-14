---
id: context_augmentation
label: Context Augmentation
type: method
---

# Context Augmentation

**Type:** method

A strategy that supplies theorem-relevant auxiliary definitions and lemmas as proof context to the LLM, mirroring how human verifiers work in large-scale verification projects.

---

Context Augmentation is a strategy employed in AutoReal that enriches the input provided to the language model with theorem-relevant auxiliary definitions, type declarations, and previously proved lemmas drawn from the surrounding verification project. This approach mirrors the workflow of human verifiers who routinely consult dependent definitions and sibling lemmas when constructing proofs in large-scale projects such as seL4. By supplying this structured proof context alongside the target theorem statement, the model can leverage project-specific knowledge that would otherwise be absent from its input, reducing failures caused by missing dependencies. Context augmentation is identified as one of the two principal contributions of the AutoReal framework and is shown to substantially improve proof success rates.
