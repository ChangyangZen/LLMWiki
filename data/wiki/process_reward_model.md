---
id: process_reward_model
label: Process Reward Model (PRM)
type: concept
---

# Process Reward Model (PRM)

**Type:** concept

A model that provides fine-grained process supervision over intermediate reasoning steps, typically created by fine-tuning LLMs to classify the correctness of individual reasoning steps.

---

A Process Reward Model (PRM) is a type of reward model designed to provide fine-grained supervision over the intermediate steps of a multi-step reasoning chain, rather than only evaluating the final answer. PRMs are typically created by fine-tuning large language models to classify whether each individual reasoning step is correct, enabling more precise feedback during inference-time search or reinforcement learning. Unlike outcome reward models, PRMs can identify the specific location of an error within a solution, which is especially useful for tasks requiring long chains of reasoning. Creating high-quality PRM training data has historically been challenging, requiring either expensive human annotation or computationally intensive automated methods such as Monte Carlo roll-outs.
