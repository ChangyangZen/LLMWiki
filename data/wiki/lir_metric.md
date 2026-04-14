---
id: lir_metric
label: LIR (Line Item Recognition)
type: metric
---

# LIR (Line Item Recognition)

**Type:** metric

A DocILE evaluation metric measuring accuracy on structured line items within invoice documents.

---

LIR, or Line Item Recognition, is a DocILE evaluation metric that measures a system's accuracy in extracting structured line items from invoice documents, such as individual product descriptions, quantities, unit prices, and extended amounts arranged in tabular form. Unlike KILE, which targets singleton key fields, LIR evaluates the ability to correctly parse repeated, positionally dependent structures within a document, making it sensitive to both extraction accuracy and structural alignment. The metric captures a distinct and generally harder aspect of document understanding, as line items require reasoning about table structure and multi-row associations. LIR is reported alongside KILE to give a fuller picture of document intelligence performance on the DocILE benchmark.
