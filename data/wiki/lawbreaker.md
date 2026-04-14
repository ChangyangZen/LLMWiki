---
id: lawbreaker
label: LawBreaker
type: dataset
---

# LawBreaker

**Type:** dataset

A framework providing formal STL specifications of traffic laws used to derive safety properties and predicates for autonomous driving evaluation in ProbGuard.

---

LawBreaker is a framework for evaluating autonomous driving systems against formal traffic law specifications encoded in Signal Temporal Logic (STL), covering a wide range of traffic regulations such as speed limits, right-of-way rules, and safe following distances. It provides a systematic methodology for testing whether autonomous vehicles comply with legal and safety requirements in simulation. In ProbGuard's autonomous driving evaluation, LawBreaker's STL specifications are translated into CTL formulas to define the safety properties monitored by the probabilistic model checker. LawBreaker thus serves as a source of formal ground-truth safety specifications for deriving predicates and evaluation criteria.
