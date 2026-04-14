---
id: stl
label: Signal Temporal Logic (STL)
type: concept
---

# Signal Temporal Logic (STL)

**Type:** concept

A temporal logic used in LawBreaker to formally specify traffic laws for autonomous vehicles, translated into CTL for probabilistic reasoning in ProbGuard.

---

Signal Temporal Logic (STL) is a temporal logic formalism designed for reasoning about the behavior of continuous-time signals, extending linear temporal logic with real-valued constraints and time-bounded operators. STL is widely used in cyber-physical systems and autonomous vehicle research to formally specify properties such as speed limits, safe following distances, and traffic law compliance. In the context of ProbGuard, STL specifications from the LawBreaker framework are translated into Computation Tree Logic (CTL) formulas to enable probabilistic model checking over the discrete symbolic states of the learned DTMC. This translation bridges continuous signal-based specifications and the discrete probabilistic models used by ProbGuard.
