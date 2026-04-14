---
id: code_foundry
label: Code Foundry Architecture
type: model
---

# Code Foundry Architecture

**Type:** model

The system architecture that takes YAML workflow specifications as input and produces validated Temporal activities as output, using orchestrator, template library, module library, and prompt blocks.

---

The Code Foundry Architecture is the core system design underlying compiled AI, responsible for transforming declarative YAML workflow specifications into validated, deployable Temporal workflow activities. It is composed of four primary components: an orchestrator that manages the compilation process, a template library providing reusable code scaffolds, a module library of pre-built functional units, and prompt blocks that structure LLM interactions during code generation. The architecture accepts human-readable workflow definitions as input and produces executable Python code artifacts as output, abstracting away the complexity of prompt engineering and runtime model management. By centralizing code generation and validation within a single architecture, the Code Foundry enables systematic quality control and reproducible workflow deployment.
