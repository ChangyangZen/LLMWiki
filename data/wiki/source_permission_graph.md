---
id: source_permission_graph
label: Source Permission Graph
type: concept
---

# Source Permission Graph

**Type:** concept

A graph G=(S,R) specifying which sources have permission to access or influence which other sources, adapting traditional access control mechanisms to agent systems.

---

The Source Permission Graph is a directed graph G=(S,R) in which nodes represent sources—such as users, system prompts, tools, and external services—and edges encode which sources have permission to send instructions to or share data with which other sources. It serves as the formal representation of access control policy within the contextual security framework, adapting traditional access control concepts to the multi-source, dynamic environment of LLM agent systems. The permission graph is used to evaluate both source authorization, which checks whether an instruction-issuing source has the appropriate edge in G, and data isolation, which checks whether information flows respect the graph's privilege boundaries. Defining and maintaining an accurate permission graph is a practical prerequisite for implementing the framework's security properties in real deployments.
