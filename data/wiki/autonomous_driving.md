---
id: autonomous_driving
label: Autonomous Driving Domain
type: concept
---

# Autonomous Driving Domain

**Type:** concept

A safety-critical evaluation domain where ProbGuard monitors traffic law compliance and collision avoidance using the Apollo autonomous driving simulator.

---

The autonomous driving domain is a safety-critical application area in which AI systems must navigate complex traffic environments while complying with traffic laws and avoiding collisions with other vehicles, pedestrians, and obstacles. In ProbGuard's evaluation, autonomous driving scenarios are simulated using the Apollo autonomous driving platform, with safety properties derived from formal STL specifications provided by the LawBreaker framework. Diverse traffic violation scenarios are generated using the μDrive framework to stress-test ProbGuard's ability to predict and prevent law violations and collisions. ProbGuard achieves advance warning times of up to 38.66 seconds in this domain, demonstrating the value of proactive monitoring in time-sensitive safety-critical settings.
