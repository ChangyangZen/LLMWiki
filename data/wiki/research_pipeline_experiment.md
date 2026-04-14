---
id: research_pipeline_experiment
label: Research Pipeline Experiment
type: dataset
---

# Research Pipeline Experiment

**Type:** dataset

A three-agent Researcher-Analyzer-Reporter experiment across 50 topics validating conservation laws, achieving zero violations and 26.7× lower quality variance.

---

The Research Pipeline Experiment is an empirical evaluation in the Agent Contracts paper that tested conservation law enforcement in a three-agent hierarchy comprising Researcher, Analyzer, and Reporter agents applied to 50 diverse research topics. The experiment was designed to verify that resource budgets delegated across the multi-agent hierarchy never exceeded the parent contract's allocation, directly testing the conservation law invariants. Results showed zero conservation violations across all 50 trials, confirming that the formal budget decomposition and monitoring mechanisms reliably enforce hierarchical resource discipline. Additionally, the experiment observed 26.7× lower quality variance compared to unconstrained baselines, suggesting that bounded resource allocation also stabilizes output quality in multi-agent pipelines.
