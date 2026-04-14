---
id: ctl
label: Computation Tree Logic (CTL)
type: concept
---

# Computation Tree Logic (CTL)

**Type:** concept

A branching-time temporal logic used as the core specification language in ProbGuard for encoding safety properties and enabling probabilistic model checking.

---

Computation Tree Logic (CTL) is a branching-time temporal logic that allows reasoning about the possible future behaviors of a system by quantifying over computation trees of states. CTL formulas combine path quantifiers, which specify whether a property holds along all paths or some path from a given state, with temporal operators such as 'eventually' and 'always' to express complex temporal properties. In ProbGuard, CTL serves as the core specification language for encoding safety properties, enabling the framework to query the learned DTMC model about the probability of violating a property in future execution steps. Safety specifications from domains such as autonomous driving and embodied household agents are translated into CTL formulas for evaluation by the PRISM model checker.
