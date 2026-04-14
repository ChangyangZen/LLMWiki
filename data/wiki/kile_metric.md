---
id: kile_metric
label: KILE (Key Information Line-level Extraction)
type: metric
---

# KILE (Key Information Line-level Extraction)

**Type:** metric

A DocILE evaluation metric measuring exact-match accuracy on key fields such as invoice number, date, and total amount.

---

KILE, or Key Information Line-level Extraction, is a DocILE evaluation metric that measures exact-match accuracy on a set of key fields extracted from invoice documents, including fields such as invoice number, date, vendor name, and total amount. The metric operates at the line level, requiring that extracted values match ground-truth annotations precisely rather than allowing partial credit. KILE is particularly sensitive to OCR errors and layout variability, as these sources of noise directly corrupt the character sequences that must match exactly. It is used alongside the LIR metric to provide a comprehensive assessment of document intelligence system performance on the DocILE benchmark.
