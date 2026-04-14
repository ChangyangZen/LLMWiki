---
id: resource_constraints
label: Resource Constraints (R)
type: concept
---

# Resource Constraints (R)

**Type:** concept

A multi-dimensional budget component of Agent Contracts governing token usage, API calls, iterations, web searches, compute time, and monetary cost.

---

Resource Constraints (R) are a multi-dimensional budget component within the Agent Contracts framework that govern the consumption of computational and financial resources during agent execution. The R component specifies upper bounds across multiple dimensions including token usage, API calls, iterations, web searches, compute time, and monetary cost, allowing fine-grained control over agent behavior. These constraints are enforced through a combination of soft mechanisms, such as budget-aware prompting, and hard mechanisms, such as the agent harness, which externally monitors and halts execution upon budget exhaustion. By making resource limits explicit and measurable, the R component enables predictable, cost-controlled agent deployments in production environments.
