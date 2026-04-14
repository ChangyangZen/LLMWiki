---
id: nucleus_sampling
label: Nucleus Sampling
type: method
---

# Nucleus Sampling

**Type:** method

A dynamic sampling strategy that selects the smallest set of tokens covering a specified probability mass threshold, used as the basis for the probability mass filter.

---

Nucleus sampling, also known as top-p sampling, is a dynamic decoding strategy that selects the smallest set of tokens whose cumulative conditional probability meets or exceeds a specified threshold p at each generation step. Unlike top-k sampling, which uses a fixed number of candidates, nucleus sampling adapts the size of the candidate set to the local probability distribution, allowing more diversity when the distribution is flat and less when it is peaked. Within the formal framework, nucleus sampling is expressed as a probability mass filter function that restricts the sampling tree to edges whose cumulative probability falls within the nucleus. It is widely used in practice and serves as the motivating example for the probability mass filter concept in the framework.
