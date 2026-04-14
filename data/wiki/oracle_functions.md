---
id: oracle_functions
label: Oracle Functions
type: concept
---

# Oracle Functions

**Type:** concept

Ideal theoretical functions that specify what information is required to verify security properties, analogous to ideal functionalities in cryptographic protocol analysis.

---

Oracle functions are ideal theoretical constructs that specify precisely what information is necessary and sufficient to verify each of the four security properties in the contextual security framework, analogous to the ideal functionalities used in cryptographic protocol analysis. Because they are defined in terms of ground-truth causal and semantic relationships—such as which inputs caused a given action or whether an action truly serves an objective—oracle functions are not directly computable in practice. Their role in the framework is normative: they define the verification target that practical defenses attempt to approximate. Analyzing the gap between real-world defense mechanisms and their corresponding oracle functions reveals fundamental limitations in approaches that lack access to full contextual information.
