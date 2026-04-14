---
id: memory_poisoning
label: Memory Poisoning
type: concept
---

# Memory Poisoning

**Type:** concept

An attack where malicious information is injected into an agent's memory from unauthenticated sources, corrupting future authorization decisions and causing cascading security violations across sessions.

---

Memory poisoning is an attack in which an adversary injects malicious or misleading information into an LLM agent's persistent memory, typically by exploiting the agent's retrieval or storage mechanisms during a prior interaction. The injected content, originating from an unauthenticated or unauthorized source, corrupts the agent's stored context in ways that influence future authorization decisions, action selections, or objective evaluations across multiple sessions. Within the contextual security framework, memory poisoning produces cascading violations: it initially constitutes a source authorization or data isolation breach, and subsequently causes downstream task alignment or action alignment failures in sessions where the poisoned memory is retrieved. The persistence of memory across sessions makes this attack particularly severe, as a single injection can undermine the security of many future agent executions.
