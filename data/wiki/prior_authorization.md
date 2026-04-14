---
id: prior_authorization
label: Prior Authorization Workflow
type: concept
---

# Prior Authorization Workflow

**Type:** concept

A healthcare administrative workflow example demonstrating compiled AI with bounded agentic invocation for GLP-1 agonist medical necessity review with deterministic coverage decisions.

---

The Prior Authorization Workflow is a healthcare administrative process example used in the compiled AI paper to demonstrate bounded agentic invocation in a real-world compliance-sensitive setting. The workflow automates GLP-1 agonist medical necessity review, a process in which an insurer's coverage determination depends on structured clinical criteria that can be evaluated deterministically alongside a narrow LLM call for interpreting free-text physician narratives. Compiled AI generates a Temporal activity that encodes the deterministic coverage logic as static code while invoking an LLM only for the semantic interpretation subtask, with defined schemas and fallback handling ensuring overall workflow reproducibility. This example illustrates how compiled AI can satisfy both the flexibility demands of natural language clinical documentation and the auditability requirements of payer compliance programs.
