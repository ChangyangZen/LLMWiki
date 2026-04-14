---
id: hotpotqa
label: HotpotQA
type: dataset
---

# HotpotQA

**Type:** dataset

A multi-hop question answering benchmark requiring reasoning over multiple documents, used to evaluate MiCP in both adaptive RAG and ReAct settings.

---

HotpotQA is a multi-hop question answering benchmark that requires reasoning over multiple supporting documents to answer questions that cannot be resolved from a single passage. The dataset was constructed to explicitly demand multi-step inference, making it a natural testbed for iterative retrieval and reasoning frameworks. In the MiCP paper, HotpotQA is used to evaluate the framework in both Adaptive RAG and ReAct settings, representing the class of complex questions that benefit most from multi-turn reasoning pipelines. Its multi-hop structure makes it particularly challenging for early stopping mechanisms, as premature termination risks missing critical supporting evidence.
