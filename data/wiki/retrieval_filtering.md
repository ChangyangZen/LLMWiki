---
id: retrieval_filtering
label: Retrieval Threshold Calibration
type: method
---

# Retrieval Threshold Calibration

**Type:** method

A conformal calibration stage in MiCP that filters irrelevant retrieved passages at each turn by applying a threshold to relevance scores, preserving gold passages with high probability.

---

Retrieval threshold calibration is a conformal calibration stage within MiCP that filters out irrelevant or noisy retrieved passages at each reasoning turn before they are used to condition the language model's response. A relevance score is computed for each retrieved passage, and a conformal threshold is calibrated on held-out data to ensure that gold, relevant passages are retained with high probability while spurious ones are discarded. This filtering step reduces the noise introduced by imperfect retrieval systems and helps maintain the quality of information available to the model at each turn. By integrating retrieval filtering into the conformal framework, MiCP provides end-to-end probabilistic guarantees that span both the retrieval and generation stages of the pipeline.
