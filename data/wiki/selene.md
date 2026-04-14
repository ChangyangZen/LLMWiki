---
id: selene
label: Selene
type: method
---

# Selene

**Type:** method

A prior LLM-driven theorem proving method applied to seL4 that reported a best averaged proof success rate of 27.06% on 340 selected theorems using GPT-4.

---

Selene is a prior LLM-driven theorem proving method applied to the seL4 microkernel verification project, representing the closest predecessor to AutoReal in the industrial formal verification setting. It reported a best averaged proof success rate of 27.06% on 340 selected seL4 theorems using GPT-4 as its underlying language model, establishing the baseline that AutoReal substantially surpasses. Selene's reliance on GPT-4 entails significant API costs and precludes local deployment, limiting its practical applicability in industrial environments with data privacy constraints. AutoReal improves upon Selene both in proof success rate and in deployment efficiency by achieving higher performance with a locally deployable 7B-parameter model.
