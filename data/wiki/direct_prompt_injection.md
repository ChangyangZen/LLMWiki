---
id: direct_prompt_injection
label: Direct Prompt Injection
type: concept
---

# Direct Prompt Injection

**Type:** concept

An attack where an authenticated user issues commands that conflict with system-level objectives, formalized as a task alignment violation where user-requested objectives conflict with system-defined constraints.

---

Direct prompt injection is an attack in which an authenticated user issues commands through the user prompt channel that conflict with constraints or objectives established at the system level, such as operator-defined safety policies or behavioral restrictions. In the contextual security framework, this is formalized as a task alignment violation: the objective requested by the user falls outside the set of objectives that the system-level context authorizes the agent to pursue. Unlike indirect prompt injection, the attacker in this case is the authenticated user themselves, making source authorization an insufficient defense since the source is legitimate. Mitigating direct prompt injection therefore requires robust enforcement of the allowed objective space, typically through safety alignment training or policy-based restrictions.
