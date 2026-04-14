---
id: detection_defenses
label: Detection Defenses
type: method
---

# Detection Defenses

**Type:** method

Security mechanisms that implement approximations of security property verification through input filtering, task alignment validation, output filtering, and sandboxing.

---

Detection defenses are security mechanisms that implement runtime approximations of security property verification, monitoring agent inputs, states, and outputs to identify violations as they occur or before they produce harm. Common approaches in this category include input filtering to identify unauthorized instruction sources, task alignment validators that compare the agent's current trajectory against the authorized objective, output filtering to prevent sensitive data exfiltration, and sandboxing to contain the effects of potentially misaligned actions. In the contextual security framework, detection defenses are analyzed as practical approximations of the oracle verification procedures for the four security properties, with their limitations understood in terms of the gap between their available information and the ground-truth information the oracles require. Combining detection defenses with prevention defenses provides layered security coverage across the agent's execution lifecycle.
