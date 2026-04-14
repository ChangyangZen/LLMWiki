---
id: bats_framework
label: BATS Framework
type: method
---

# BATS Framework

**Type:** method

Budget-Aware Tool Selection framework showing that explicit budget awareness enables effective agent scaling beyond simply granting larger tool-call budgets.

---

The BATS Framework (Budget-Aware Tool Selection) is a method for scaling LLM agents that demonstrates how explicit budget awareness enables more effective use of tool-call budgets compared to simply granting agents larger unstructured allocations. By making agents aware of their remaining tool-call budget and training or prompting them to select tools accordingly, BATS achieves better task performance per unit of budget consumed. The framework's findings reinforce the broader thesis of the Agent Contracts paper that explicit, formal resource awareness improves agent efficiency and predictability beyond what is achievable through unconstrained scaling. BATS is positioned as complementary to Agent Contracts, representing a model-level capability that can work in conjunction with structural contract enforcement to produce resource-efficient agentic systems.
