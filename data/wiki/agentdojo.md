---
id: agentdojo
label: AgentDojo
type: dataset
---

# AgentDojo

**Type:** dataset

A dynamic environment benchmark for evaluating prompt injection defenses in LLM agents, showing that defenses approximating action alignment reduce targeted attack success rates by up to 88%.

---

AgentDojo is a dynamic benchmark environment designed to evaluate the effectiveness of defenses against prompt injection attacks in LLM agent systems, providing a suite of realistic task scenarios in which agents interact with external tools and potentially adversarial environmental content. Within the contextual security framework, AgentDojo serves as an empirical validation platform demonstrating that defenses which approximate the action alignment oracle function reduce targeted attack success rates by up to 88% compared to undefended baselines. The benchmark is notable for its dynamic task generation, which reduces the risk of evaluation overfitting, and for measuring both security (attack success rate) and utility (task completion rate) simultaneously. Results on AgentDojo illustrate the practical value of the framework's conceptual distinctions, particularly the separation between task-level and action-level security verification.
