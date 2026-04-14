---
id: indirect_prompt_injection
label: Indirect Prompt Injection
type: concept
---

# Indirect Prompt Injection

**Type:** concept

An attack redefined as requiring simultaneous violations of source authorization (unauthenticated source) and action alignment (action does not serve authorized objective), distinguishing it from legitimate external content processing.

---

Indirect prompt injection is an attack against LLM agents in which adversarial instructions are embedded within environmental content—such as web pages, documents, or tool outputs—that the agent retrieves during legitimate task execution. Within the contextual security framework, the attack is formally characterized as requiring the simultaneous violation of both source authorization, because the injecting party is not an authenticated or authorized instruction source, and action alignment, because the resulting action does not serve the user's authorized objective. This dual-violation definition is significant because it distinguishes malicious injection from benign cases where an agent legitimately follows instructions from external content as part of its authorized task. Defenses must therefore address both the attribution of instruction sources and the alignment of resulting actions to be effective against this attack.
