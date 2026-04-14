---
id: kile
label: KILE (Key Information Line-level Extraction)
type: metric
---

# KILE (Key Information Line-level Extraction)

**Type:** metric

A DocILE evaluation metric measuring exact-match accuracy on key fields such as invoice number, date, and total amount.

---

KILE, or Key Information Line-level Extraction, is an evaluation metric used in the DocILE benchmark to measure the accuracy of information extraction systems on structured key fields within invoice documents. It assesses exact-match performance on fields such as invoice number, issue date, vendor name, and total amount, requiring both correct field identification and precise value extraction. KILE is computed at the line level, meaning that partial matches or offset extractions are not credited, enforcing a strict standard of extraction fidelity. In the compiled AI evaluation, KILE serves as the primary accuracy metric for comparing compiled AI variants against runtime LLM baselines on the DocILE document intelligence task.
