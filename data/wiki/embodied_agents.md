---
id: embodied_agents
label: Embodied Household Agents
type: concept
---

# Embodied Household Agents

**Type:** concept

A safety-critical evaluation domain where LLM agents perform household manipulation tasks, monitored for unsafe object-appliance interactions.

---

Embodied household agents are LLM-powered agents that perform physical manipulation tasks within simulated domestic environments, such as placing objects in appliances, operating household devices, and navigating room layouts. Safety in this domain is defined in terms of object-appliance interaction rules—for example, avoiding placing metallic objects in microwaves or flammable items near heat sources—as specified by the SafeAgentBench benchmark. ProbGuard monitors embodied agents in this domain by abstracting states in terms of object proximity and appliance activation predicates, learning DTMCs from task execution traces to predict unsafe interactions before they occur. Evaluations in this domain demonstrate ProbGuard's ability to generalize beyond autonomous driving to diverse agent task settings.
