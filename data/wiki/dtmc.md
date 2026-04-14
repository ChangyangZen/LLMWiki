---
id: dtmc
label: Discrete-Time Markov Chain (DTMC)
type: model
---

# Discrete-Time Markov Chain (DTMC)

**Type:** model

A probabilistic model used to represent agent behavioral dynamics over symbolic abstract states, learned from execution traces to enable risk prediction.

---

A Discrete-Time Markov Chain (DTMC) is a probabilistic model that represents the sequential dynamics of a stochastic system through a finite set of states and transition probabilities between them, where the probability of transitioning to the next state depends only on the current state. In ProbGuard, DTMCs are learned from agent execution traces over symbolically abstracted states to capture the behavioral dynamics of LLM agents. These learned models are then queried using probabilistic model checking tools such as PRISM to evaluate the likelihood of reaching unsafe states as specified by Computation Tree Logic (CTL) formulas. Laplace smoothing with valid-transition awareness is applied during learning to address sparse transition data while preserving the logical structure of the model.
