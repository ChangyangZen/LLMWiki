---
id: human_annotation
label: Human Annotation
type: method
---

# Human Annotation

**Type:** method

The primary early approach for creating PRM training data, which is costly, prone to low inter-annotator agreement, and requires discarding a significant fraction of annotated solutions.

---

Human annotation was the primary approach for creating PRM training data in early work on process supervision, requiring trained annotators to label the correctness of individual reasoning steps in large collections of LLM-generated solutions. This approach is resource-intensive, as it demands significant annotator time and domain expertise, and studies have reported low inter-annotator agreement for step-level correctness judgments, raising concerns about label reliability. Additionally, a substantial fraction of annotated solutions must often be discarded due to quality issues, further reducing the efficiency of the process. The high cost and scalability limitations of human annotation motivated the development of automated alternatives such as Monte Carlo roll-outs and, more recently, the FoVer framework.
