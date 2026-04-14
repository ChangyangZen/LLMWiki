---
id: advance_warning_time
label: Advance Warning Time (AWT)
type: metric
---

# Advance Warning Time (AWT)

**Type:** metric

The temporal lead by which ProbGuard predicts a safety property violation before it physically manifests, measured in seconds.

---

Advance Warning Time (AWT) is a metric used in ProbGuard to quantify the temporal lead by which the framework successfully predicts a safety property violation before it physically manifests in agent behavior, measured in seconds. A higher AWT indicates that the monitoring system provides earlier warnings, giving the agent more time to take corrective action and avoid unsafe outcomes. ProbGuard achieves an average AWT of up to 38.66 seconds in autonomous driving scenarios, demonstrating its ability to anticipate violations significantly ahead of time compared to reactive monitoring approaches. AWT is a key evaluation metric that distinguishes proactive monitoring frameworks from reactive ones, which by definition have zero advance warning time.
