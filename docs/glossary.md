# HRA Glossary

## Editorial Policy

This glossary defines the canonical vocabulary used throughout Human Reflection Architecture (HRA).

Its purpose is to summarize terminology established by the Architecture and Kernel rather than introduce new architectural principles.

If a glossary definition conflicts with the Architecture or Kernel, the source document takes precedence.

---

## Inclusion Criteria

A term is included when at least one of the following applies:

- HRA gives the term a specialized meaning.
- The term has normative significance within HRA.
- The term is commonly confused with another HRA concept.
- The term appears repeatedly across the Architecture, Kernel, or core specifications.

---

## Entry Format

Each glossary entry contains:

- **Definition**
- **Not the same as**
- **Related**
- **Status**
- **Source**

---

# Part 1 — Foundation & Reflection Concepts

---

## Human Reflection Architecture (HRA)

**Definition**

A human-centered reflection framework that preserves human judgment while using AI as an assistive reasoning partner.

**Not the same as**

- AI decision system
- Autonomous agent

**Related**

- Architecture
- Kernel
- Human Judgment

**Status**

Canonical

**Source**

Architecture §1, Kernel §1

---

## Observation

**Definition**

A recorded event, experience, or fact collected during reflection. An observation represents what was noticed, not a complete representation of reality.

**Not the same as**

- Evidence
- Interpretation

**Related**

- Reflection
- Evidence
- Context

**Status**

Canonical

**Source**

Architecture §4

---

## Reflection

**Definition**

The intentional process of examining observations, evidence, and interpretations to improve future judgment.

**Not the same as**

- Thinking
- Decision making

**Related**

- Observation
- Evidence
- Human Judgment

**Status**

Canonical

**Source**

Architecture §4

---

## Evidence

**Definition**

Information used to support or challenge a judgment. Evidence informs judgment but does not replace it.

**Not the same as**

- Observation
- Judgment

**Related**

- Counterevidence
- Human Judgment
- Reflection

**Status**

Canonical

**Source**

Architecture §4

---

## Counterevidence

**Definition**

Evidence that challenges an existing interpretation or judgment. HRA preserves counterevidence to reduce confirmation bias.

**Not the same as**

- Contradiction
- Error

**Related**

- Evidence
- Revision
- Confidence Update

**Status**

Derived

**Source**

Derived from Architecture §4

---

## Context

**Definition**

The surrounding conditions that give meaning to observations and evidence. Context limits overgeneralization.

**Not the same as**

- Background information
- Identity

**Related**

- Observation
- Pattern Hypothesis
- Limitation

**Status**

Canonical

**Source**

Architecture §5

---

## Pattern Hypothesis

**Definition**

A tentative explanation proposed from repeated observations. It remains open to revision as new evidence becomes available.

**Not the same as**

- Fact
- Personal Identity

**Related**

- Repeated Observation
- Confidence Update
- Revision

**Status**

Canonical

**Source**

Architecture §4

---

## Repeated Observation

**Definition**

Multiple observations showing a consistent tendency across different situations.

**Not the same as**

- Single observation
- Conclusion

**Related**

- Pattern Hypothesis
- Confidence Update

**Status**

Derived

**Source**

Derived from Architecture §4

---

## Confidence Update

**Definition**

The adjustment of confidence in a working interpretation as new evidence becomes available. It refers to confidence in an interpretation, not confidence in oneself.

**Not the same as**

- Self-confidence
- Final certainty

**Related**

- Pattern Hypothesis
- Counterevidence
- Revision

**Status**

Derived

**Source**

Derived from Architecture §4

---

## Human Judgment

**Definition**

The human decision that concludes the current reflection cycle. Responsibility for the judgment always remains with the human.

**Not the same as**

- AI output
- Evidence

**Related**

- Reflection
- Human Responsibility
- AI Assistance

**Status**

Canonical

**Source**

Architecture §4, Kernel §2

---

## Revision

**Definition**

The process of updating an interpretation or judgment in response to new evidence. Revision is a normal outcome of learning rather than evidence of failure.

**Not the same as**

- Error correction
- Restart

**Related**

- Counterevidence
- Confidence Update
- Pattern Hypothesis

**Status**

Canonical

**Source**

Architecture §4

---

## Intentional Stopping

**Definition**

The deliberate decision to end a reflection cycle when additional thinking is unlikely to improve judgment.

**Not the same as**

- Giving up
- Ignoring evidence

**Related**

- Human Judgment
- Reflection Flow

**Status**

Canonical

**Source**

Kernel §3

---

## Uncertainty

**Definition**

A legitimate outcome of reflection when available evidence is insufficient to justify stronger conclusions.

**Not the same as**

- Failure
- Lack of effort

**Related**

- Confidence Update
- Human Judgment
- Pattern Hypothesis

**Status**

Canonical

**Source**

Kernel §3

---

## Personal Identity

**Definition**

A person's enduring identity. HRA does not infer personal identity from isolated observations or individual pattern hypotheses.

**Not the same as**

- Pattern Hypothesis
- Observation

**Related**

- Context
- Human Judgment

**Status**

Canonical

**Source**

Architecture §8

---

# Part 2 — Architecture & Kernel Concepts

---

## Architecture

**Definition**

The system of principles, responsibilities, boundaries, and design decisions that defines what HRA is and how its components relate.

**Not the same as**

- Kernel
- Repository structure

**Related**

- Design Principle
- Architectural Responsibility
- Kernel

**Status**

Canonical

**Source**

Architecture §1–3

---

## Repository Architecture

**Definition**

The organization of repository components according to their assigned responsibilities. It determines where HRA’s philosophy, examples, specifications, and governance belong.

**Not the same as**

- Directory tree
- Reflection Flow

**Related**

- Architecture
- Architectural Responsibility
- Responsibility Boundary

**Status**

Canonical

**Source**

Architecture §3 and §6

---

## Architectural Responsibility

**Definition**

The primary purpose assigned to an HRA component or document. It defines what that component is responsible for providing or explaining.

**Not the same as**

- Runtime Responsibility
- Responsibility Boundary

**Related**

- Repository Architecture
- Responsibility Boundary

**Status**

Canonical

**Source**

Architecture §3

---

## Responsibility Boundary

**Definition**

The point at which one architectural responsibility ends and another begins. Responsibility boundaries prevent different documents or components from silently assuming each other’s roles.

**Not the same as**

- Architectural Responsibility
- Access control

**Related**

- Repository Architecture
- Separation of Responsibilities

**Status**

Canonical

**Source**

Architecture §6

---

## Reflection Flow

**Definition**

The conceptual cycle through which observations, evidence, optional interpretation, Human Judgment, and future observation interact within HRA.

**Not the same as**

- Module workflow
- Kernel Execution Model

**Related**

- Reflection
- Human Judgment
- Next Observation

**Status**

Canonical

**Source**

Architecture §5

---

## Scope

**Definition**

The range of purposes and use cases that HRA is intentionally designed to support.

**Not the same as**

- Capability list
- Roadmap

**Related**

- Limitation
- Guardrail
- Architecture

**Status**

Canonical

**Source**

Architecture §7

---

## Limitation

**Definition**

An intentional restriction on what HRA claims or attempts to do. A limitation protects responsibility and scope rather than representing a missing feature.

**Not the same as**

- Defect
- Technical failure

**Related**

- Scope
- Guardrail
- AI Limitation

**Status**

Canonical

**Source**

Architecture §7

---

## Design Principle

**Definition**

A stable rule that guides architectural decisions across HRA. Design principles are broader and more durable than individual implementation choices.

**Not the same as**

- Personal value
- Module requirement

**Related**

- Architecture
- Design Decision
- Kernel Guarantee

**Status**

Canonical

**Source**

Architecture §2

---

## Design Decision

**Definition**

A deliberate architectural choice made between multiple possible approaches. A design decision should record its rationale, evidence, and accepted trade-offs.

**Not the same as**

- Preference
- Implementation detail

**Related**

- Evidence Source
- Trade-off
- Architectural Decision Record

**Status**

Canonical

**Source**

Architecture §8

---

## Trade-off

**Definition**

A consequence accepted when one architectural priority is chosen over another. A trade-off records both what is gained and what is intentionally sacrificed.

**Not the same as**

- Defect
- Unexplained compromise

**Related**

- Design Decision
- Evidence Source
- Architectural Decision Record

**Status**

Canonical

**Source**

Architecture §8

---

## Evidence Source

**Definition**

A documented artifact, observation, review, discussion, or implementation result used to support an architectural decision.

**Not the same as**

- Proof
- Final authority

**Related**

- Evidence
- Design Decision
- Architectural Decision Record

**Status**

Canonical

**Source**

Architecture §8

---

## Architectural Decision Record (ADR)

**Definition**

A structured record of an architectural decision, including its evidence, rationale, trade-offs, compatibility effects, and current status.

**Not the same as**

- Meeting notes
- Proof of correctness

**Related**

- Design Decision
- Evidence Source
- Kernel Evolution

**Status**

Canonical

**Source**

Architecture §8; Kernel §7

---

## Kernel

**Definition**

The stable execution foundation shared by every HRA Module. It preserves HRA’s mission by defining guarantees, runtime responsibilities, execution conditions, compatibility requirements, and evolution rules.

**Not the same as**

- Architecture
- Module
- Personal value system

**Related**

- Execution Contract
- Kernel Guarantee
- Module Contract

**Status**

Canonical

**Source**

Architecture §3 and §6; Kernel §1–2

---

## Execution Contract

**Definition**

The minimum shared contract that every HRA Module must preserve. It translates architectural principles into requirements that apply during implementation and execution.

**Not the same as**

- Single workflow
- Module implementation

**Related**

- Kernel
- Kernel Guarantee
- Module Contract

**Status**

Canonical

**Source**

Kernel §1–2

---

## Kernel Guarantee

**Definition**

A condition that every HRA Module must preserve regardless of domain, interface, or workflow.

**Not the same as**

- Feature
- Module preference

**Related**

- Kernel
- Execution Contract
- Module Contract

**Status**

Canonical

**Source**

Kernel §3

---

## Runtime Responsibility

**Definition**

A responsibility assigned to the human, AI, or Module while reflection is taking place. Runtime responsibilities preserve Human Judgment during execution.

**Not the same as**

- Architectural Responsibility
- General capability

**Related**

- Human Responsibility
- AI Assistance
- Module Contract

**Status**

Canonical

**Source**

Kernel §4

---

## Execution Condition

**Definition**

An individual condition that must remain true while an HRA Module operates. Execution conditions constrain a workflow without prescribing a fixed sequence.

**Not the same as**

- Workflow step
- Kernel Execution Model

**Related**

- Runtime Responsibility
- Kernel Guarantee
- Kernel Execution Model

**Status**

Canonical

**Source**

Kernel §5

---

## Kernel Execution Model

**Definition**

The system formed by the minimum Execution Conditions that all HRA Modules must preserve. It allows different workflows without imposing one linear reflection process.

**Not the same as**

- Execution Condition
- Reflection Flow
- Module workflow

**Related**

- Kernel
- Execution Contract
- Module Contract

**Status**

Canonical

**Source**

Kernel §5

---

## Kernel Evolution

**Definition**

The evidence-based revision of the HRA Kernel over time. Kernel evolution occurs more slowly than Module development because its changes may affect every compatible Module.

**Not the same as**

- Routine Module update
- Capability expansion

**Related**

- Versioning
- Backward Compatibility
- Architectural Decision Record

**Status**

Canonical

**Source**

Kernel §7

---

## Versioning

**Definition**

The practice of assigning and documenting versions so that Kernel changes and Module Compatibility can be traced over time.

Modules should identify the Kernel version against which they were reviewed. Breaking changes require explicit justification and guidance for affected Modules.

**Not the same as**

- Release date
- File history

**Related**

- Kernel Evolution
- Breaking Change
- Backward Compatibility

**Status**

Canonical

**Source**

Kernel §7

---

## Backward Compatibility

**Definition**

The ability of a revised Kernel to remain compatible with Modules that conformed to an earlier version.

**Not the same as**

- No change
- Permanent compatibility

**Related**

- Versioning
- Breaking Change
- Kernel Evolution

**Status**

Canonical

**Source**

Kernel §7

---

## Breaking Change

**Definition**

A Kernel change that invalidates or requires modification of an existing compatible Module. Changes that weaken, remove, or redefine a Kernel Guarantee require a new major version.

**Not the same as**

- Editorial clarification
- Module-specific update

**Related**

- Versioning
- Backward Compatibility
- Kernel Guarantee

**Status**

Canonical

**Source**

Kernel §7

---

# Part 3 — Modules, Safety & Governance

---

## Module

**Definition**

A domain-specific implementation built on top of the HRA Kernel. A Module may define its own workflow, prompts, terminology, and interface while preserving the shared Execution Contract.

**Not the same as**

- Kernel
- Example
- Reference Implementation

**Related**

- Module Contract
- Module Compatibility
- Kernel

**Status**

Canonical

**Source**

Architecture §3 and §6; Kernel §1–2

---

## Module Contract

**Definition**

The set of requirements that determines whether a Module conforms to the HRA Kernel.

A Module Contract requires a Module to preserve Kernel Guarantees, Runtime Responsibilities, conceptual distinctions, revisability, uncertainty, and compatibility with the declared Kernel version.

**Not the same as**

- Kernel Guarantee
- Module Template

**Related**

- Module
- Module Compatibility
- Execution Contract

**Status**

Canonical

**Source**

Kernel §6

---

## Module Compatibility

**Definition**

The condition in which a Module preserves the shared Kernel and remains compatible with other HRA Modules built on the same Execution Contract.

Compatibility depends on satisfying the Module Contract rather than sharing identical workflows.

**Not the same as**

- Identical implementation
- General usefulness

**Related**

- Module Contract
- Versioning
- Kernel

**Status**

Canonical

**Source**

Kernel §6–7

---

## AI Assistance

**Definition**

The use of AI to support reflection without transferring interpretation or judgment away from the human.

AI may organize observations, compare records, surface alternative interpretations, identify repeated signals, and summarize evidence.

**Not the same as**

- AI Judgment
- Autonomous Agent

**Related**

- Human Responsibility
- AI Limitation
- Runtime Responsibility

**Status**

Canonical

**Source**

Architecture §2 and §7; Kernel §4

---

## AI Limitation

**Definition**

A restriction on what AI is permitted to do within HRA.

AI must not replace Human Judgment, define personal identity, diagnose people, or manufacture certainty when evidence remains insufficient.

**Not the same as**

- Missing capability
- Technical limitation

**Related**

- AI Assistance
- Guardrail
- Human Responsibility

**Status**

Canonical

**Source**

Architecture §7; Kernel §4

---

## Human Responsibility

**Definition**

The continuing responsibility of the human for interpretation, uncertainty, judgment, and action throughout reflection.

AI Assistance never transfers this responsibility away from the human.

**Not the same as**

- Human control
- AI Responsibility

**Related**

- Human Judgment
- AI Assistance
- Runtime Responsibility

**Status**

Canonical

**Source**

Architecture §2 and §7; Kernel §3–4

---

## Alternative Interpretation

**Definition**

A possible explanation that coexists with existing interpretations until sufficient evidence supports one over another.

Alternative interpretations encourage reflection without prematurely closing uncertainty.

**Not the same as**

- Counterevidence
- Human Judgment

**Related**

- Interpretation
- Evidence
- Pattern Hypothesis

**Status**

Derived

**Source**

Derived from Kernel §3–5

---

## Guardrail

**Definition**

An explicit boundary that prevents HRA, AI, or a Module from exceeding its intended responsibilities.

Guardrails preserve scope, responsibility, uncertainty, and Human Judgment during execution.

**Not the same as**

- Kernel Guarantee
- Technical security mechanism

**Related**

- Scope
- Limitation
- AI Limitation

**Status**

Derived

**Source**

Derived from Architecture §7 and Kernel §3–6

---

## Reference Implementation

**Definition**

A concrete implementation demonstrating how HRA can be applied in practice.

A Reference Implementation may introduce domain-specific workflows without redefining the shared Architecture or Kernel.

**Not the same as**

- Module
- Kernel

**Related**

- Human Reflection Architecture
- Module

**Status**

Derived

**Source**

Derived from Architecture §3 and §6

---

## Revisability

**Definition**

The ability for interpretations and judgments to change when supported by new evidence.

Revision is the action; Revisability is the architectural guarantee that revision remains possible.

**Not the same as**

- Revision
- Indecision

**Related**

- Revision
- Confidence Update
- Kernel Guarantee

**Status**

Canonical

**Source**

Kernel §3 and §6
