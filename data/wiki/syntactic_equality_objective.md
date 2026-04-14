---
id: syntactic_equality_objective
label: Syntactic Equality Objective
type: concept
---

# Syntactic Equality Objective

**Type:** concept

The simplest objective function that assigns a score of one only when two token sequences are exactly identical, corresponding to standard LLM token sampling.

---

The syntactic equality objective is the simplest possible objective function within the formal framework, assigning a score of one if and only if two token sequences are character-for-character identical and zero otherwise. It corresponds directly to standard token-level probability estimation and entropy computation, treating every distinct surface form as a unique outcome regardless of its meaning. While computationally straightforward, this objective can overestimate uncertainty in cases where multiple syntactically distinct outputs convey the same semantic content. It serves as a useful baseline and is the implicit objective underlying many standard LLM sampling and evaluation procedures.
