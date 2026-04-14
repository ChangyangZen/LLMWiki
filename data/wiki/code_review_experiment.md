---
id: code_review_experiment
label: Code Review Experiment
type: dataset
---

# Code Review Experiment

**Type:** dataset

An experiment using a Coder-Reviewer iterative pipeline on 70 LiveCodeBench problems to validate runaway prevention, achieving 90% token reduction and 525× lower variance.

---

The Code Review Experiment is an empirical evaluation within the Agent Contracts paper that tested the framework's runaway prevention capabilities using a Coder-Reviewer iterative pipeline applied to 70 LiveCodeBench problems released after February 2025. In this setup, a coder agent produced solutions and a reviewer agent provided feedback in repeated cycles, a pattern prone to runaway token consumption without enforcement. Results demonstrated that Agent Contracts achieved a 90% reduction in total token usage compared to unconstrained baselines, along with a 525× reduction in variance across runs, confirming that formal contracts produce predictable and bounded resource consumption. The experiment validated both the effectiveness of hard enforcement mechanisms and the practical utility of the framework for iterative agentic workflows.
