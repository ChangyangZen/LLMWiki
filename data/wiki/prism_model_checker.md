---
id: prism_model_checker
label: PRISM Model Checker
type: method
---

# PRISM Model Checker

**Type:** method

A probabilistic model checker used by ProbGuard to evaluate symbolic models against CTL specifications and estimate the likelihood of unsafe outcomes.

---

PRISM is an open-source probabilistic model checker that supports the analysis of formal models including DTMCs, Markov decision processes, and continuous-time Markov chains against specifications written in temporal logics such as PCTL and CTL. In ProbGuard, PRISM is used to evaluate the learned symbolic DTMC against CTL safety specifications, computing the probability that the agent will reach an unsafe state from its current symbolic state within a bounded number of future steps. These probability estimates form the core of ProbGuard's risk prediction mechanism, driving intervention decisions when the estimated risk exceeds the user-defined threshold. PRISM's efficient model checking algorithms make it suitable for integration into the online monitoring loop of an LLM agent framework.
