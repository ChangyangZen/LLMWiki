---
id: livecode_bench
label: LiveCodeBench
type: dataset
---

# LiveCodeBench

**Type:** dataset

A holistic, contamination-free benchmark for evaluating LLMs on code problems, used in the runaway prevention experiment with 70 problems released post-February 2025.

---

LiveCodeBench is a holistic, contamination-free benchmark for evaluating large language models on programming tasks, designed to mitigate the data contamination concerns that affect static code benchmarks. The benchmark is continuously updated with new problems released after specific dates, ensuring that evaluation reflects genuine generalization rather than memorization of training data. In the Agent Contracts empirical evaluation, 70 LiveCodeBench problems released after February 2025 were used to validate the runaway prevention experiment, providing a realistic and uncontaminated testbed for measuring token consumption and variance in iterative code review workflows. The benchmark's contamination-free design strengthens the validity of the experimental results reported in the Agent Contracts paper.
