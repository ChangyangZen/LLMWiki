---
id: triviaqa
label: TriviaQA
type: dataset
---

# TriviaQA

**Type:** dataset

A large-scale reading comprehension dataset with distantly supervised question-answer pairs, used as a single-hop evaluation benchmark for MiCP.

---

TriviaQA is a large-scale reading comprehension dataset consisting of trivia questions paired with evidence documents collected from the web and Wikipedia, with answers often requiring synthesis across multiple passages. The dataset was originally constructed with distant supervision, meaning answer annotations were not manually verified against specific passages, introducing a degree of noise into the evaluation. In the MiCP paper, TriviaQA serves as a single-hop evaluation benchmark, allowing assessment of the framework's ability to achieve coverage guarantees and early stopping efficiency on factoid-style questions. Results on TriviaQA contribute to demonstrating the generalizability of MiCP across diverse question answering settings.
