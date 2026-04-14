---
id: musique
label: MuSiQue
type: dataset
---

# MuSiQue

**Type:** dataset

A multi-hop QA benchmark constructed via single-hop question composition, used to evaluate MiCP on complex reasoning tasks.

---

MuSiQue (Multi-hop Questions via Single-hop Question Composition) is a challenging multi-hop question answering benchmark constructed by compositionally combining single-hop questions into multi-step reasoning chains, with careful filtering to ensure that shortcuts cannot easily bypass the required reasoning steps. Its construction methodology makes it more resistant to spurious correlations than earlier multi-hop benchmarks, resulting in genuinely harder questions that demand faithful multi-step inference. In the MiCP paper, MuSiQue is used to evaluate the framework on complex reasoning tasks where multi-turn pipelines provide the greatest potential benefit. MiCP's performance on MuSiQue illustrates the framework's ability to balance early stopping efficiency with the coverage demands of difficult compositional questions.
