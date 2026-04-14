---
id: fover_framework
label: FoVer Framework
type: method
---

# FoVer Framework

**Type:** method

A framework that synthesizes PRM training data from formal reasoning tasks by annotating step-level error labels using formal verification tools, without requiring human annotation or repeated LLM calls.

---

The FoVer Framework is a data synthesis pipeline introduced to address the high cost and scalability limitations of existing Process Reward Model (PRM) training data creation methods. FoVer generates step-by-step solutions to formal reasoning tasks using large language models and then applies automated formal verification tools, specifically the Z3 SMT solver and the Isabelle/HOL theorem prover, to assign accurate binary error labels at each reasoning step. By leveraging the deterministic correctness guarantees of formal verification, FoVer eliminates the need for costly human annotation or repeated LLM inference calls such as Monte Carlo roll-outs. The framework produces the FoVer-40K dataset, which is used to fine-tune LLMs into PRMs capable of generalizing across both formal and informal reasoning tasks.
