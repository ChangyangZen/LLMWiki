---
id: llm_agents
label: LLM Agents
type: concept
---

# LLM Agents

**Type:** concept

AI systems that pair large language models with tool use capabilities to take actions in external environments, maintaining memory across interactions and decomposing high-level objectives into action sequences.

---

LLM agents are AI systems that combine large language models with the ability to invoke external tools—such as web search, code execution, file systems, and APIs—enabling them to take sequences of actions in real-world environments rather than merely producing text responses. These systems maintain memory across interactions and are capable of decomposing high-level user objectives into multi-step action plans, perceiving environmental feedback, and adapting their behavior accordingly. The expanded capabilities of LLM agents relative to standalone language models introduce qualitatively new security challenges, as actions taken by agents can have direct, irreversible consequences in external systems. The contextual security framework was developed specifically to address these challenges by formalizing the conditions under which an agent's actions are authorized given its full execution context.
