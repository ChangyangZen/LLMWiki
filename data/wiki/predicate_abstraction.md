---
id: predicate_abstraction
label: Predicate Abstraction
type: method
---

# Predicate Abstraction

**Type:** method

A domain-specific technique that maps concrete agent states to finite symbolic states using Boolean predicates capturing safety-relevant properties.

---

Predicate abstraction is a formal technique that maps concrete, high-dimensional system states to a finite set of symbolic states by evaluating a collection of Boolean predicates capturing safety-relevant properties of the system. In ProbGuard, domain-specific predicates are defined for each evaluation domain—such as speed limits, collision proximity, and object interactions—to encode the conditions most relevant to safe agent behavior. Each concrete agent state encountered during execution is mapped to a symbolic state vector by evaluating these predicates, enabling the construction of a tractable DTMC over a manageable state space. This abstraction is essential for making probabilistic model checking computationally feasible in complex real-world agent environments.
