# HRA Module Template

## 1. Why This Template?

Human Reflection Architecture (HRA) is designed to support multiple reflection Modules built upon a shared Architecture, Kernel, Glossary, and Guardrails.

This template defines the minimum documentation required to describe and maintain an HRA Module.

Its purpose is to ensure that independently developed Modules remain understandable, reviewable, and compatible with the shared HRA Foundation while preserving freedom in reflection design and implementation.

This template specifies **what a Module must document**.

It does **not** prescribe a single implementation architecture, reflection workflow, interface, prompting strategy, user experience, or form of reflection.

Different Modules MAY support different forms of reflection in different ways, provided that they remain compatible with the HRA Kernel and shared Guardrails.

Completing this template does not by itself establish HRA conformance.

Conformance depends on whether the implemented Module actually preserves the applicable Kernel Guarantees, Runtime Responsibilities, and shared Guardrails.

The template exists to make those responsibilities explicit, reviewable, and maintainable throughout the Module's evolution.

### How to Use This Template

Each section distinguishes between information that is:

- **Required** — necessary to describe or evaluate the Module;
- **Recommended** — strongly encouraged when relevant to the Module; or
- **Optional** — included only when useful for the Module's Scope or implementation.

The questions included throughout this template are design prompts.

They are intended to help authors clarify their Module rather than constrain reflection to a single design pattern.

---

## 2. Module Identity

The purpose of this section is to establish **why the Module exists** before describing how it operates.

### Required

#### Module Name

**Design question:** What clearly and consistently identifies this Module?

Provide a clear and stable name that identifies the Module.

The name SHOULD describe the Module's primary reflection purpose rather than implementation details.

---

#### Purpose

**Design question:** Why does this Module exist?

Describe the primary purpose of the Module and the reflection need it is intended to address.

Purpose explains **why the Module exists**.

It does not describe the internal reflection process.

---

#### Evidence of Need

**Design question:** Why is a distinct Module justified?

Explain the limitation, unmet need, recurring reflection problem, or other Evidence that justifies introducing this Module.

The rationale SHOULD clarify why the need is not adequately addressed by existing Modules or general-purpose interaction alone.

This section documents the justification for expanding HRA rather than merely introducing another implementation.

---

#### Scope

**Design question:** What kinds of reflection is this Module intended to support?

Define the situations, domains, or questions that fall within the Module's intended Scope.

The Scope SHOULD be specific enough to establish meaningful boundaries without attempting to enumerate every possible application.

### Recommended

#### Intended Context / Users

**Design question:** In what context, or for whom, is this Module primarily intended?

When relevant, describe the expected usage context or users.

This information provides design context.

It MUST NOT redefine or weaken the Module's architectural responsibilities.

---

## 3. Reflection Contract

The Reflection Contract defines the Module's intended responsibilities within reflection before implementation details or workflows are described.

Purpose explains **why the Module exists**.

The Reflection Contract explains **what the reflection process is intended to support and where its responsibility ends**.

The Reflection Contract SHOULD remain stable even when implementation details evolve.

### Required

#### Reflection Goal

**Design question:** What direction of reflection does this Module primarily support?

Describe the primary reflection objective supported by the Module.

The Reflection Goal describes the intended direction of reflection, not a mandatory endpoint.

Reflection MAY support decision-making, learning, perspective-taking, meaning-making, value clarification, pattern examination, or other forms of reflective activity.

---

#### Supported Reflection Outcomes

**Design question:** What may legitimately result from using this Module?

Describe the outcomes that the Module is designed to support.

The following examples are illustrative rather than exhaustive:

- clarification of Observations;
- organization of available Evidence;
- Alternative Interpretations;
- Pattern Hypotheses;
- Revision;
- Next Observation;
- Intentional Stopping;
- postponed judgment; or
- Human Judgment.

The Module MUST NOT require every reflection cycle to produce the same outcome.

---

#### Human Judgment Boundary

**Design question:** What remains the person's responsibility during this Module?

Describe where AI assistance ends and where Human Judgment remains necessary.

The Module SHOULD make responsibility explicit throughout reflection rather than treating the Human–AI boundary as a single handoff point.

AI and human participation MAY alternate throughout the process, provided that responsibility remains visible and Human Judgment is not delegated.

---

#### Stopping Conditions

**Design question:** When is continued reflection no longer required by this Module?

Describe the conditions under which the current reflection cycle may pause, stop, postpone judgment, or move toward a Next Observation.

Intentional Stopping MUST remain a legitimate outcome rather than continued reflection being treated as the default objective.

Stopping Conditions describe the Module's reflection boundary.

They MUST NOT be used to assess clinical severity or make professional determinations about a person.

### Recommended

#### Non-Guarantees

**Design question:** What should a person not expect this Module to guarantee?

When useful, state important outcomes that the Module does not guarantee.

Non-Guarantees SHOULD clarify expectations without repeating the Module's general limitations or shared HRA Guardrails.

---

## 4. Kernel Compliance

Every HRA Module operates under the shared HRA Kernel.

The purpose of this section is to document how the Module preserves the Kernel's architectural responsibilities.

Kernel Compliance concerns architectural obligations.

It does not describe implementation techniques or operational safeguards.

Completing this section does not by itself establish HRA conformance.

### Required

#### Applicable Kernel Guarantees

**Design question:** Which Kernel Guarantees are relevant to this Module?

Identify the applicable Kernel Guarantees.

For each applicable guarantee, briefly explain how the Module preserves or operationalizes that guarantee.

A Module MAY identify a Kernel Guarantee as not applicable when that determination can be justified by the documented Scope.

The Kernel itself MUST NOT be redefined by the Module.

---

#### Runtime Responsibilities

**Design question:** How is responsibility distributed during reflection?

Describe how responsibility is shared throughout the Module.

The description SHOULD explain:

- which responsibilities remain with the human;
- which responsibilities are performed by AI;
- where responsibility transitions occur; and
- how Human Judgment remains preserved throughout the reflection process.

Responsibility boundaries SHOULD remain explicit throughout the Module.

---

#### Required Conceptual Distinctions

**Design question:** Which conceptual distinctions from the Kernel does this Module rely upon?

Identify the conceptual distinctions required by the Module.

These SHOULD remain consistent with the Kernel's conceptual model.

When a distinction is intentionally omitted because it is outside the Module's Scope, that omission SHOULD be documented.

Conceptual simplification MUST NOT remove distinctions required to preserve Human Judgment or applicable Kernel Guarantees.

---

#### Kernel Compatibility

**Design question:** Against which Kernel version has this Module been reviewed?

Record the Target Kernel Version.

Document known compatibility considerations affecting the Module.

Compatibility MUST NOT be assumed solely because the Module previously conformed to an earlier Kernel version.

---

## 5. Guardrail Implementation

Every HRA Module operates within the shared Guardrails established by the HRA Foundation.

The purpose of this section is to describe how the Module preserves those Guardrails during design and operation.

Guardrails define operational boundaries.

They complement, but do not replace, the Module's architectural obligations under the Kernel.

This section documents implementation intent.

It does not by itself establish Guardrail conformance.

### Required

#### Applicable Shared Guardrails

**Design question:** Which shared Guardrails are relevant to this Module?

Identify the applicable shared Guardrails.

Briefly explain how each Guardrail is preserved.

Shared Guardrails MUST NOT be weakened, contradicted, or redefined by the Module.

---

#### Guardrail Preservation

**Design question:** How do the Module's design decisions preserve the applicable Guardrails?

Describe the mechanisms through which the Module preserves applicable Guardrails.

Examples may include:

- workflow design;
- Human Judgment checkpoints;
- output structure;
- interaction design;
- prompting strategy;
- deterministic logic; or
- other implementation choices.

The objective is not to prescribe implementation, but to explain how the intended Guardrail remains effective.

### Recommended

#### Module-specific Guardrails

**Design question:** Does this Module require additional Guardrails beyond the shared HRA Guardrails?

Additional Guardrails MAY be introduced when necessary to address risks unique to the Module.

Module-specific Guardrails:

- MUST remain consistent with shared Guardrails;
- MUST NOT weaken or replace shared Guardrails; and
- SHOULD document the additional risks they address.

### Optional

#### Known Guardrail Tensions

**Design question:** Are there known design trade-offs involving Guardrails?

Document situations where preserving one design objective creates tension with another architectural objective.

Such tensions SHOULD remain explicit.

They MUST NOT be resolved by silently weakening a shared Guardrail.

Relevant ADRs MAY be referenced when appropriate.

---

## 6. Module Workflow

A Module MAY define its own workflow.

HRA does not prescribe a universal reflection workflow.

The purpose of this section is to describe how this particular Module organizes reflection.

Module workflows may be linear, iterative, recursive, adaptive, or domain-specific.

Different Modules MAY organize reflection differently, provided that they remain compatible with the HRA Kernel and shared Guardrails.

### Required

#### Inputs

**Design question:** What information is expected before reflection begins?

Describe the information accepted by the Module.

The description SHOULD clarify the expected form of the information rather than how it is collected.

---

#### Major Reflection Stages

**Design question:** How does reflection progress through this Module?

Describe the major stages of reflection.

The stages SHOULD represent meaningful transitions in reflection rather than implementation-specific details.

Modules are not expected to follow a single linear workflow.

---

#### Human Intervention Points

**Design question:** Where is Human Judgment intentionally expected?

Identify where Human Judgment becomes important during the workflow.

This SHOULD explain where:

- AI provides assistance;
- Human Judgment becomes necessary;
- Revision may occur; or
- additional Evidence may be introduced.

Human intervention SHOULD remain visible throughout the workflow.

---

#### Revision and Stopping Paths

**Design question:** How does the workflow support revision or intentional stopping?

Describe how the Module supports:

- Revision;
- Next Observation;
- postponed judgment; and
- Intentional Stopping.

The workflow SHOULD allow reflection to conclude without requiring a final conclusion whenever appropriate.

---

#### Outputs

**Design question:** What does this Module produce?

Describe the intended outputs produced by the Module.

Outputs MAY include structured reflection artifacts, organized Evidence, Pattern Hypotheses, recommendations for further observation, summaries, or other Module-specific results.

Generated outputs SHOULD remain distinguishable from Human Judgment whenever both are present.

---

## 7. Interaction Surface

Interaction Surface describes how information crosses the Module boundary.

The purpose of this section is to document how information enters and leaves the Module without prescribing implementation technologies or software interfaces.

Different Modules MAY expose different interaction surfaces depending on their intended Scope and implementation.

### Required

#### Inputs

**Design question:** What information enters the Module?

Describe the information accepted by the Module.

Inputs MAY include observations, conversations, documents, structured records, external systems, sensor data, or other domain-specific sources.

The Module SHOULD describe the expected form of the input rather than the collection mechanism.

---

#### Outputs

**Design question:** What information leaves the Module?

Describe the information produced by the Module.

Outputs SHOULD remain consistent with the Module's Reflection Contract.

Generated information MUST remain distinguishable from Human Judgment whenever both are present.

### Optional

#### External Interfaces

**Design question:** Does this Module exchange information with external systems or other Modules?

When applicable, describe how the Module exchanges information with external systems, repositories, tools, services, or other HRA Modules.

This section documents interaction boundaries.

It SHOULD NOT describe implementation-specific APIs or technologies.

Modules without external integrations MAY omit this section.

---

## 8. Assumptions, Limitations, and Failure Modes

Every HRA Module operates under explicit assumptions and within defined boundaries.

The purpose of this section is to document those boundaries so that the Module's intended Scope, reliability, and limitations remain transparent throughout its lifecycle.

Unknowns and limitations are considered part of the Module's design rather than implementation defects.

### Required

#### Assumptions

**Design question:** What assumptions does this Module depend upon?

Document the assumptions required for the Module to operate as intended.

Assumptions MAY concern:

- available observations;
- quality of evidence;
- user participation;
- domain knowledge;
- external systems; or
- other conditions required by the Module.

Assumptions SHOULD remain explicit and reviewable.

---

#### Out of Scope

**Design question:** What is this Module intentionally not designed to do?

Describe situations, questions, or responsibilities that fall outside the Module's intended Scope.

The purpose of this section is to define the Module's boundary rather than enumerate every unsupported case.

Modules SHOULD avoid expanding beyond their documented Scope without architectural justification.

---

#### Known Limitations

**Design question:** What limitations are currently known?

Document known limitations of the Module's current design.

Limitations MAY arise from:

- architectural decisions;
- available evidence;
- implementation constraints; or
- the inherent complexity of the reflection domain.

Known limitations SHOULD be reviewed as the Module evolves.

The existence of limitations does not by itself indicate that the Module is incomplete.

---

#### Known Failure Modes

**Design question:** Under what conditions should the Module's outputs be treated with additional caution?

Describe situations in which the Module may produce misleading, incomplete, unstable, or otherwise unreliable reflection outcomes.

Failure Modes SHOULD indicate when additional Human Judgment, Revision, or further Observation becomes particularly important.

Known Failure Modes SHOULD be documented even when no immediate mitigation is available.

Failure Modes MUST NOT be silently treated as normal Module behavior.

---

## 9. Kernel Compatibility

HRA Modules evolve independently from the Kernel.

The purpose of this section is to identify the Module's current state and the Kernel version against which that state has been designed and reviewed.

Compatibility is explicit.

It MUST NOT be assumed solely because an earlier version of the Module was compatible with an earlier or current Kernel version.

### Required

#### Module Version

**Design question:** What documented state of the Module does this specification represent?

Record the Module version described by this document.

A Module version identifies a specific documented state.

Module versioning MAY evolve independently from Kernel versioning.

---

#### Target Kernel Version

**Design question:** Against which Kernel version has this Module been designed and reviewed?

Identify the Target Kernel Version.

A Module MUST NOT claim compatibility with a Kernel version that has not been evaluated against its Reflection Contract, Runtime Responsibilities, applicable Kernel Guarantees, and shared Guardrails.

---

#### Compatibility Status

**Design question:** What is the Module's current compatibility status?

Record the Module's current compatibility status with the Target Kernel Version.

Compatibility SHOULD remain explicit rather than assumed.

Modules whose compatibility has not yet been evaluated after relevant Kernel evolution SHOULD remain under review until evaluation is completed.

### Recommended

#### Compatibility Notes

**Design question:** Are there important compatibility considerations?

Document known compatibility constraints, migration considerations, or unresolved compatibility questions that materially affect the Module.

Minor implementation changes that do not affect Kernel compatibility do not need to be recorded here.

---

#### Related ADRs

**Design question:** Which architectural decisions materially affect this Module?

Reference ADRs that materially affect the Module's Reflection Contract, Kernel Compatibility, or other architectural responsibilities.

This section SHOULD NOT be used as a general history of Module changes.
