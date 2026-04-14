---
id: probguard
label: ProbGuard
type: method
---

# ProbGuard

**Type:** method

A proactive runtime monitoring framework for LLM agents that uses probabilistic risk prediction via learned DTMCs to anticipate and prevent safety violations before they occur.

---

ProbGuard is a proactive runtime monitoring framework designed to enhance the safety of Large Language Model (LLM) agents by anticipating safety violations before they occur. Unlike reactive approaches that detect violations only after unsafe actions have been executed, ProbGuard learns Discrete-Time Markov Chains (DTMCs) from agent execution traces and uses probabilistic model checking to predict the likelihood of reaching unsafe states. The framework abstracts concrete agent states into symbolic representations via predicate abstraction and applies PAC-style statistical guarantees to ensure the reliability of its learned models. When predicted risk exceeds a user-defined threshold, ProbGuard intervenes in the agent's planning loop to prevent the unsafe behavior. Evaluated on autonomous driving and embodied household agent domains, ProbGuard provides warnings up to 38.66 seconds ahead of violations and reduces unsafe behavior by up to 65.37% while preserving 80.4% task completion.
