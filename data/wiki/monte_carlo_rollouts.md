---
id: monte_carlo_rollouts
label: Monte Carlo Roll-outs
type: method
---

# Monte Carlo Roll-outs

**Type:** method

Also known as Math-Shepherd, a method that generates multiple continuations from a reasoning step to estimate its correctness based on the frequency of reaching correct final answers.

---

Monte Carlo roll-outs, also known as the Math-Shepherd method, is a technique for automatically estimating the correctness of intermediate reasoning steps by generating multiple solution continuations from each step and observing how frequently they lead to a correct final answer. A step is labeled as correct if a sufficiently high proportion of its continuations reach the right answer, and incorrect otherwise. While this method avoids the need for human annotation, it requires a large number of LLM inference calls per step, making it computationally expensive and potentially noisy due to the stochastic nature of LLM generation. Monte Carlo roll-outs have been used to train prominent PRMs such as RLHFlow-Llama3.1-8B and Qwen2.5-Math-PRM-7B.
