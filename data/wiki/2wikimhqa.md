---
id: 2wikimhqa
label: 2WikiMultiHopQA
type: dataset
---

# 2WikiMultiHopQA

**Type:** dataset

A fully template-generated multi-hop QA dataset used to evaluate MiCP, where answerable and unanswerable questions are relatively easier to distinguish.

---

2WikiMultiHopQA is a multi-hop question answering dataset generated from structured templates applied to two Wikipedia articles, designed to require explicit cross-document reasoning. Because its questions are generated from deterministic templates, the dataset exhibits relatively clear patterns distinguishing answerable from unanswerable instances, making it somewhat easier for models to assess confidence compared to organically collected benchmarks. In the MiCP paper, 2WikiMultiHopQA is used as one of five evaluation benchmarks, and backbone models such as Qwen3.5-9B demonstrate particularly strong early stopping efficiency on this dataset. The dataset's structural regularity provides a useful data point for understanding how MiCP performs when uncertainty signals are more reliably calibrated.
