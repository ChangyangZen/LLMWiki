---
id: data_isolation
label: Data Isolation
type: concept
---

# Data Isolation

**Type:** concept

A security property ensuring information flows respect privilege boundaries defined by the source permission graph, preventing data leakage across contexts with different authorization levels.

---

Data isolation is a security property that ensures information flows within an LLM agent system respect the privilege boundaries encoded in the source permission graph, preventing data from crossing from higher-privilege contexts into lower-privilege or unauthorized ones. A violation occurs when an agent transmits or exposes information from a source to a destination that the permission graph does not authorize to receive it, constituting cross-context information leakage. This property adapts classical confidentiality and information-flow control concepts to the dynamic, multi-source environment of LLM agents. Memory poisoning attacks can produce data isolation violations with cascading effects, as corrupted information persists across sessions and influences future authorization decisions.
