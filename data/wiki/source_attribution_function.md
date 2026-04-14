---
id: source_attribution_function
label: Source Attribution Function (L)
type: method
---

# Source Attribution Function (L)

**Type:** method

An oracle function that maps each input to its originating sources, tracking information provenance as it flows through the agent system.

---

The Source Attribution Function, denoted L, is an oracle function that maps each input or piece of information in the agent's context to its originating source or sources, tracking provenance as information flows and transforms through the agent system. This function is essential for evaluating both source authorization and data isolation, as both properties require knowing where information came from before determining whether it is permitted to influence the agent or flow to a given destination. Source attribution becomes particularly challenging in multi-step agent trajectories where information retrieved from one source is stored in memory and later combined with information from other sources. Practical approximations of L, such as metadata tagging and provenance tracking, provide partial but incomplete coverage of the ground-truth function.
