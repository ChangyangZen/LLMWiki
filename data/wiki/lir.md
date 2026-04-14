---
id: lir
label: LIR (Line Item Recognition)
type: metric
---

# LIR (Line Item Recognition)

**Type:** metric

A DocILE evaluation metric measuring accuracy on structured line items within documents, where Code Factory achieves the highest score of 80.4%.

---

LIR, or Line Item Recognition, is a DocILE evaluation metric that measures an information extraction system's ability to accurately identify and extract structured tabular data from within invoice documents, specifically the individual line items corresponding to products or services rendered. Unlike KILE, which targets singular key fields, LIR evaluates performance over potentially variable-length, multi-row structured regions of a document, presenting additional challenges related to layout parsing and row boundary detection. In the compiled AI evaluation, Code Factory achieved the highest LIR score of 80.4% among all systems tested, outperforming both fully deterministic compiled AI and all runtime inference baselines. This result demonstrates that bounded agentic invocation of LLMs within a deterministic framework can be advantageous for structurally complex extraction subtasks.
