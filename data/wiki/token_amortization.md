---
id: token_amortization
label: Token Amortization
type: metric
---

# Token Amortization

**Type:** metric

An operational metric measuring the break-even transaction count and token consumption ratio between compiled and runtime inference approaches.

---

Token Amortization is an operational efficiency metric used to characterize the economic break-even point between compiled AI and runtime inference approaches. It measures both the transaction volume at which the upfront token cost of code generation is offset by per-transaction savings, and the overall ratio of token consumption between the two paradigms across a deployment lifetime. Because compiled AI incurs a one-time generation cost but zero tokens per subsequent transaction, the amortization curve crosses the break-even threshold rapidly at scale, after which savings compound with each additional execution. This metric is particularly relevant for high-volume enterprise workflows where the same logical task is executed thousands or millions of times.
