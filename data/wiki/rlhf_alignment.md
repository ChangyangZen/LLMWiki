---
id: rlhf_alignment
label: RLHF / Safety Alignment
type: method
---

# RLHF / Safety Alignment

**Type:** method

Training techniques including RLHF and Constitutional AI that establish the boundary of allowed objective space O by defining which objectives the agent should pursue or refuse.

---

RLHF (Reinforcement Learning from Human Feedback) and related safety alignment techniques such as Constitutional AI are training methodologies that shape an LLM's behavior by optimizing it against human preference signals or explicit principle sets, establishing which objectives the model should pursue and which it should refuse. Within the contextual security framework, these techniques are understood as mechanisms that define and enforce the boundary of the allowed objective space O—the set of objectives that the agent is authorized to pursue—thereby providing a defense against jailbreaking and other task alignment violations. RLHF alignment operates as a prevention defense by internalizing security-relevant constraints into the model's parameters rather than enforcing them through external runtime checks. However, the framework's analysis reveals that alignment training alone cannot address violations arising from source authorization failures or data isolation breaches, which require complementary mechanisms.
