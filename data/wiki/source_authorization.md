---
id: source_authorization
label: Source Authorization
type: concept
---

# Source Authorization

**Type:** concept

A security property ensuring the agent only executes instructions that originate from authenticated and authorized sources as defined by the source permission graph.

---

Source authorization is a security property that ensures an LLM agent only executes instructions originating from sources that are both authenticated and authorized to issue such instructions, as specified by the source permission graph. This property distinguishes between content that an agent legitimately processes—such as web page text retrieved during a task—and instructions embedded within that content by adversarial third parties who lack the authority to direct the agent. Indirect prompt injection attacks are partly characterized as violations of source authorization, since the injecting party is not an authenticated or authorized instruction source. The confused deputy attack also violates source authorization by causing the agent to exercise elevated permissions on behalf of a source that does not hold those permissions.
