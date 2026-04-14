---
id: prediction_set
label: Prediction Set
type: concept
---

# Prediction Set

**Type:** concept

The set of candidate answers constructed by MiCP that is guaranteed to contain the correct answer with probability at least 1-alpha.

---

A prediction set is the output of a conformal prediction procedure, consisting of the subset of candidate labels that the framework cannot confidently rule out for a given input at the desired coverage level. Unlike point predictions, prediction sets come with a formal statistical guarantee that the true label is included with probability at least one minus alpha, making them useful for safety-critical and uncertainty-aware applications. The size of a prediction set reflects the model's uncertainty: a confident model produces small sets containing few candidates, while an uncertain model produces larger sets. In MiCP, prediction sets are constructed from clusters of sampled LLM answers and may include a special Can't Answer label to preserve coverage guarantees for questions the model cannot resolve within its turn budget.
