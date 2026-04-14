---
id: runtime_monitoring
label: Runtime Monitoring
type: concept
---

# Runtime Monitoring

**Type:** concept

The process of observing system executions against formal specifications during deployment and triggering interventions upon detecting or predicting violations.

---

Runtime monitoring is the process of observing the execution of a system during deployment and comparing its behavior against formal safety specifications, triggering alerts or interventions when violations are detected or predicted. Traditional runtime monitors operate reactively, checking whether executed actions satisfy safety properties only after the fact. ProbGuard advances this paradigm by introducing proactive runtime monitoring, in which probabilistic risk predictions are generated ahead of time to warn of impending violations before they manifest in agent behavior. Runtime monitoring for LLM agents presents unique challenges due to the non-deterministic, language-driven nature of agent decision-making, motivating the use of probabilistic models and formal verification techniques.
