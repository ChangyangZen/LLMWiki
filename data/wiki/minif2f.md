---
id: minif2f
label: miniF2F Benchmark
type: dataset
---

# miniF2F Benchmark

**Type:** dataset

A cross-system benchmark for formal olympiad-level mathematics that has served as the primary evaluation benchmark for most prior LLM-driven theorem proving research.

---

miniF2F is a cross-system benchmark for formal mathematics comprising olympiad-level problems formalized in multiple proof assistants, including Lean, Metamath, and Isabelle. It has become the primary evaluation benchmark for most prior work on LLM-driven neural theorem proving, enabling comparison across a wide range of methods. While miniF2F has driven significant progress in automated mathematical reasoning, its problems differ substantially in structure and scale from industrial verification tasks, motivating the use of seL4 as a more representative benchmark in the AutoReal paper. Methods such as LEGO-Prover, ProofAug, and Seed-Prover have reported state-of-the-art results on miniF2F, though these results do not directly transfer to industrial-scale verification settings.
