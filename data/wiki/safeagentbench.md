---
id: safeagentbench
label: SafeAgentBench
type: dataset
---

# SafeAgentBench

**Type:** dataset

A benchmark providing object- and state-level safety rules for embodied agents, used to evaluate ProbGuard in household task safety monitoring.

---

SafeAgentBench is a benchmark designed for evaluating the safety of LLM-based embodied agents performing household manipulation tasks, providing a comprehensive set of object- and state-level safety rules that define unsafe interactions between objects and household appliances. The benchmark includes diverse household task scenarios and associated safety constraints, enabling systematic evaluation of safety monitoring frameworks in realistic domestic settings. ProbGuard uses SafeAgentBench's safety rules to derive predicates and safety specifications for its DTMC-based monitoring in the embodied agent evaluation domain. Results on SafeAgentBench demonstrate ProbGuard's ability to reduce unsafe object interactions while maintaining high task completion rates.
