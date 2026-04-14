---
id: hallucination
label: LLM Hallucination
type: concept
---

# LLM Hallucination

**Type:** concept

The tendency of LLMs to generate logically inconsistent or factually incorrect statements, which VERGE aims to detect and correct.

---

LLM hallucination refers to the phenomenon in which large language models generate outputs that are factually incorrect, logically inconsistent, or unsupported by the provided context, despite appearing fluent and confident. Hallucinations arise from the statistical nature of LLM training, which optimizes for plausible token sequences rather than ground-truth accuracy or logical validity. The VERGE framework is explicitly motivated by the need to detect and correct hallucinations by subjecting LLM outputs to formal verification through SMT solvers and ensemble consensus, providing structured feedback that guides the model toward logically consistent responses. By localizing inconsistent claims via Minimal Correction Subsets, VERGE targets hallucination correction at the finest possible granularity.
