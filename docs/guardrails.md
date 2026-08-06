# HRA Guardrails

## 1. Why Guardrails?

The Architecture defines what Human Reflection Architecture is.

The Kernel defines the execution contract that every HRA Module must preserve.

Guardrails define the boundaries that AI, Modules, human-facing workflows, shared documentation, and architectural changes must not cross.

Guardrails are written from the perspective of foreseeable failure.

Their purpose is not to prescribe a single reflection process. Their purpose is to prevent behavior that would weaken Human Judgment, obscure uncertainty, blur responsibility, or move HRA beyond its intended Scope.

Guardrails reduce foreseeable risk.

They do not guarantee correct, safe, or beneficial outcomes.

---

## 2. How Guardrails Work

Guardrails operationalize the boundaries established by the Architecture and Kernel.

They do not create new architectural guarantees.

A Guardrail may:

- prohibit a behavior;
- preserve a conceptual or responsibility boundary;
- require uncertainty to remain visible;
- prevent unsupported claims;
- require a workflow to support pausing or Intentional Stopping; or
- require attention to move beyond HRA when continued reflection is not appropriate.

Guardrails apply to all HRA Modules and shared repository artifacts within their stated Scope.

A Module may introduce additional domain-specific Guardrails.

It MUST NOT waive, weaken, or contradict a shared Guardrail.

A proposed shared Guardrail must identify the Architecture principle, Kernel Guarantee, Runtime Responsibility, or documented risk that it operationalizes.

Shared Guardrails SHOULD be reflected in default Module behavior rather than depend solely on optional settings or user configuration.

When shared Guardrails appear to conflict, a Module MUST NOT silently waive one of them.

The conflict SHOULD be documented and reviewed against the Architecture, Kernel, Scope, and affected Human–AI responsibility boundaries.

### Normative Language

The following terms indicate the intended strength of requirements in this document:

- **MUST / MUST NOT** indicate mandatory constraints.
- **SHOULD / SHOULD NOT** indicate strong recommendations that require contextual judgment.
- **MAY** indicates optional behavior compatible with the Architecture and Kernel.

Guardrails constrain system and repository behavior.

They are not instructions for controlling how a person must think.

---

## 3. Human Judgment Guardrails

### HJ-01 — Human Judgment MUST NOT be delegated

AI and Modules MAY support the organization, comparison, and interpretation of information.

They MUST NOT claim final authority over interpretation, judgment, or action.

Responsibility remains with the human.

Human responsibility does not imply that a person must decide alone or without qualified support. Preserving Human Judgment includes seeking additional Evidence, consultation, or appropriate support when needed.

Human confirmation alone does not establish meaningful Human Judgment when a workflow has already framed one outcome as authoritative, expected, or required.

**Grounding:** Architecture — Human Judgment Comes First; Kernel — Human Responsibility and Runtime Responsibilities.

---

### HJ-02 — Personal Identity MUST NOT be inferred, assigned, or reinforced

AI and Modules MUST NOT infer, assign, or reinforce enduring Personal Identity from isolated Observations, repeated records, behavioral tendencies, or Pattern Hypotheses.

A recurring Observation MAY support further reflection.

It MUST NOT be presented as a definitive statement about who a person is.

**Grounding:** Architecture — Working Hypotheses and Scope; Kernel — Context Preservation and AI Limitations.

---

### HJ-03 — Uncertainty MUST remain a valid outcome

A Module MUST NOT require certainty merely to complete a workflow.

Valid outcomes include:

- insufficient Evidence;
- uncertainty;
- postponed judgment;
- a Next Observation; and
- Intentional Stopping.

Uncertainty SHOULD remain visible unless additional Evidence justifies increased confidence.

**Grounding:** Architecture — Iterative Reflection; Kernel — Optional Conclusions.

---

### HJ-04 — Reflection results MUST remain revisable

A Module MUST NOT present an interpretation or judgment as permanently settled.

New Observations, Context, Counterevidence, or Alternative Interpretations must be able to challenge an earlier result.

Revision is a normal outcome of learning rather than evidence that reflection failed.

**Grounding:** Architecture — Iterative Reflection; Kernel — Revisability.

---

### HJ-05 — HRA MUST NOT be presented as a substitute for professional services

HRA MAY help organize Observations, questions, concerns, or information before a person seeks outside support.

Modules and documentation MUST NOT present HRA as a substitute for qualified assessment, diagnosis, treatment, legal advice, financial advice, or other professional services when those services are appropriate.

Appropriate support is context-dependent and is not limited to professional services. It may also include trusted personal, community, educational, or institutional support.

These examples are illustrative rather than exhaustive.

**Grounding:** Architecture — Scope and Limitations; Kernel — Human Responsibility and AI Limitations.

---

## 4. AI Guardrails

### AI-01 — AI MUST assist rather than decide

AI MAY:

- organize Observations;
- compare records;
- identify Repeated Signals;
- summarize Evidence;
- surface Alternative Interpretations; and
- challenge assumptions.

AI MUST NOT perform or claim authority over Human Judgment.

AI MUST NOT present itself as uniquely authoritative, uniquely understanding, or necessary for a person's continued reflection.

**Grounding:** Architecture — Human Judgment Comes First; Kernel — AI Assistance and Runtime Responsibilities.

---

### AI-02 — AI MUST NOT manufacture certainty

AI output MUST NOT express certainty beyond what the available Evidence reasonably supports.

A fluent, detailed, or confident response MUST NOT be treated as stronger Evidence merely because of how it is written.

Higher expressed confidence does not establish greater correctness.

AI MUST NOT present speculative predictions about a person's future behavior, mental state, or Personal Identity as evidence-based conclusions.

Conditional projections MAY be presented when their assumptions, uncertainty, Context, and limited Scope remain explicit.

AI MUST NOT manufacture reassurance by dismissing expressed concerns or claiming that no problem exists without sufficient Evidence.

Supportive language MAY acknowledge a person's experience without making unsupported safety, health, or outcome claims.

When Evidence remains insufficient, AI output SHOULD preserve uncertainty rather than produce a definitive explanation.

**Grounding:** Architecture — Evidence Before Judgment and Working Hypotheses; Kernel — Conceptual Distinction and Optional Conclusions.

---

### AI-03 — AI MUST preserve plausible alternatives

When multiple interpretations remain plausible, AI SHOULD keep relevant alternatives visible.

AI MUST NOT present one interpretation as uniquely correct unless the available Evidence justifies excluding the alternatives.

AI SHOULD distinguish acknowledging a person's experience from endorsing an unsupported interpretation.

It SHOULD surface relevant alternatives or questions rather than automatically reinforce assumptions that the available Evidence does not support.

The existence of an Alternative Interpretation does not establish that interpretation as correct.

**Grounding:** Architecture — Evidence Before Judgment; Kernel — AI Assistance and Revisability.

---

### AI-04 — AI MUST NOT conceal uncertainty or evidential limits

AI output SHOULD distinguish:

- what was observed;
- what is being interpreted;
- what remains unknown; and
- what additional Evidence may change the current view.

Unknowns and ambiguity MUST NOT be hidden merely to create a more complete or persuasive answer.

**Grounding:** Architecture — Evidence Before Judgment; Kernel — Conceptual Distinction and Optional Conclusions.

---

### AI-05 — AI MUST NOT diagnose or imply diagnosis

AI MUST NOT diagnose medical or psychological conditions.

It MUST NOT present behavioral patterns, symptom-like Observations, or reflection records as Evidence that a person probably has a particular condition.

Avoiding the word `diagnosis` does not make an equivalent inference acceptable.

When professional assessment may be relevant, AI MAY help organize questions without predicting the result of that assessment.

**Grounding:** Architecture — Scope and Limitations; Kernel — AI Limitations.

---

### AI-06 — AI MUST NOT infer, assign, or reinforce Personal Identity

AI MUST NOT characterize a person's enduring identity from reflection records, recurring behavior, or Pattern Hypotheses.

It MUST NOT repeatedly reinforce a temporary interpretation until it functions as a fixed identity claim.

The accumulation of long-term reflection records MUST NOT by itself justify greater confidence in claims about Personal Identity.

Reflection history remains partial, context-dependent, and open to Revision.

AI MUST NOT imply privileged knowledge of a person's inner state beyond the information and Context actually available.

**Grounding:** Architecture — Working Hypotheses and Scope; Kernel — Context Preservation and Revisability.

---

## 5. Evidence and Interpretation Guardrails

### EI-01 — Observation MUST remain distinct from Evidence

Recording an Observation does not automatically make it Evidence for a particular judgment.

Its evidential value depends on relevance, Context, quality, and the question under review.

Modules MUST preserve this distinction.

**Grounding:** Architecture — Reflection Flow and Core Concepts; Kernel — Conceptual Distinction.

---

### EI-02 — Evidence MUST remain distinct from interpretation and judgment

Evidence may support, weaken, or leave an interpretation unchanged.

It does not automatically determine meaning or produce Human Judgment.

Evidence supports judgment.

It does not remove the need for judgment.

**Grounding:** Architecture — Evidence Before Judgment; Kernel — Human Responsibility and Conceptual Distinction.

---

### EI-03 — Counterevidence MUST remain visible

Modules and AI output MUST NOT omit, suppress, or silently down-rank relevant Counterevidence merely because it conflicts with the current interpretation.

When relevant Counterevidence exists, AI SHOULD make its presence visible and explain how it affects—or does not currently affect—the interpretation under review.

The existence of Counterevidence does not automatically disprove a hypothesis.

It requires the hypothesis to remain open to reconsideration.

**Grounding:** Architecture — Evidence Before Judgment and Iterative Reflection; Kernel — Revisability.

---

### EI-04 — Repetition MUST NOT be treated as universal proof

Repeated Observations MAY justify a Pattern Hypothesis or further review.

They MUST NOT be treated as universal rules, permanent conclusions, diagnoses, or statements of Personal Identity.

The number of repetitions alone does not establish a shared cause.

Recurring Observations MUST NOT be converted into stable identity claims without meaningful Human Judgment—and Human Judgment itself does not transform such claims into Objective Truth.

**Grounding:** Architecture — Working Hypotheses and Context; Kernel — Context Preservation.

---

### EI-05 — Context MUST NOT be removed from interpretation

Modules MUST NOT generalize an interpretation beyond the Context supported by available Observations and Evidence.

Differences in time, environment, role, relationship, and circumstance MAY strengthen, weaken, or contradict a Pattern Hypothesis.

**Grounding:** Architecture — Long-Term Patterns and Scope; Kernel — Context Preservation.

---

### EI-06 — Repeated Signals MUST NOT trigger automatic revision

A Repeated Signal across independent reviews MAY justify closer examination.

It MUST NOT automatically determine Revision or replace the designated decision process.

The independence, relevance, and evidential basis of the perspectives matter more than the number of similar recommendations.

**Grounding:** Architecture — Evidence Before Expansion and Design Decisions; Kernel — Human Responsibility.

---

### EI-07 — Core conceptual distinctions MUST remain visible

Modules SHOULD preserve visible distinctions between:

- Observation and Evidence;
- Evidence and Interpretation;
- Interpretation and Human Judgment;
- Pattern Hypothesis and Personal Identity; and
- Revision and failure.

Interface simplicity MUST NOT erase distinctions required by the Kernel.

**Grounding:** Architecture — Core Concepts; Kernel — Conceptual Distinction.

---

## 6. Module Guardrails

### MO-01 — Modules MUST preserve the Kernel

A Module MAY introduce domain-specific workflows, prompts, terminology, and interfaces.

It MUST NOT weaken, contradict, or redefine any shared Kernel Guarantee.

**Grounding:** Architecture — Separation of Responsibilities; Kernel — Module Contract.

---

### MO-02 — Modules MUST preserve Runtime Responsibilities

A Module MUST NOT transfer interpretation or Human Judgment from the human to AI.

Additional automation MUST NOT silently shift responsibility across the Human–AI boundary established by the Kernel.

A Module MUST NOT treat a formal confirmation step as sufficient Evidence that meaningful responsibility remained with the human.

**Grounding:** Architecture — Human Judgment Comes First; Kernel — Runtime Responsibilities.

---

### MO-03 — Modules MUST NOT require a Pattern Hypothesis

Pattern recognition is one possible outcome of reflection.

A Module MUST NOT require every reflection cycle to produce a Pattern Hypothesis.

**Grounding:** Architecture — Working Hypotheses; Kernel — Optional Conclusions.

---

### MO-04 — Modules MUST NOT require a conclusion

A Module MUST support uncertainty, postponed judgment, Intentional Stopping, and Next Observation as legitimate outcomes.

It MUST NOT generate or pressure a person toward a conclusion merely to complete the workflow.

**Grounding:** Architecture — Iterative Reflection; Kernel — Optional Conclusions and Execution Conditions.

---

### MO-05 — Domain-specific rules MUST remain domain-specific

A practice developed for one Module, Reference Implementation, or application domain MUST NOT be presented as a shared HRA principle without documented architectural justification.

**Grounding:** Architecture — Responsibility Boundaries; Kernel — Module Independence and Compatibility.

---

### MO-06 — Shared Guardrails MUST NOT be weakened for convenience

Implementation convenience, automation, performance, simplicity, user engagement, growth objectives, or product metrics MUST NOT be used as sufficient justification for weakening a shared Guardrail.

Shared Guardrails SHOULD be represented in default behavior rather than hidden behind optional settings.

A shared Guardrail MAY be revised or retired only through documented architectural review demonstrating that it is unsupported, redundant, superseded, or inconsistent with the Architecture or Kernel.

**Grounding:** Architecture — Evidence Before Expansion and Sustainable Growth; Kernel — Kernel Evolution.

---

### MO-07 — Partial adoption MUST NOT be presented as HRA conformance

An implementation MAY adopt individual HRA concepts without conforming to the full HRA Kernel and shared Guardrails.

It MUST NOT describe itself as an HRA Module or HRA-conforming implementation unless it satisfies the applicable Module Contract and shared Guardrails.

**Grounding:** Architecture — Responsibility Boundaries; Kernel — Module Contract and Module Compatibility.

---

### MO-08 — Interface design MUST NOT undermine valid reflection outcomes

A Module MUST NOT use interface design, defaults, completion incentives, or engagement mechanisms to pressure a person toward continued reflection, a Pattern Hypothesis, or a conclusion.

Uncertainty, postponed judgment, and Intentional Stopping MUST remain meaningfully accessible outcomes.

Providing an option in name only does not preserve Human Agency when the interface systematically discourages its use.

**Grounding:** Architecture — Human Judgment Comes First; Kernel — Optional Conclusions and Human Responsibility.

---

## 7. Stopping and Escalation Guardrails

### SE-01 — Modules MUST support pausing and Intentional Stopping

A Module SHOULD provide a clear mechanism for ending the current reflection cycle without requiring a definitive conclusion.

Stopping is a valid outcome when additional reflection is unlikely to improve the current judgment.

**Grounding:** Architecture — Iterative Reflection; Kernel — Optional Conclusions.

---

### SE-02 — Repetition alone MUST NOT be treated as progress

A Module MUST NOT repeatedly generate substantially similar interpretations without new Observations, Evidence, or meaningful Alternative Interpretations.

Instead, it SHOULD support:

- pausing;
- postponed judgment;
- identification of a Next Observation; or
- Intentional Stopping.

When a person indicates that continued reflection is no longer helpful, the Module SHOULD avoid encouraging repetition merely to continue the workflow.

HRA does not determine whether repetitive reflection constitutes a psychological condition.

**Grounding:** Architecture — Evidence Before Expansion and Iterative Reflection; Kernel — Intentional Stopping.

---

### SE-03 — Modules MUST NOT assess clinical severity

A Module MUST NOT diagnose, grade, or classify distress as a clinical condition.

When a person expresses concern about persistent distress, worsening functioning, or their ability to remain safe, the Module SHOULD direct attention toward appropriate real-world support rather than attempt to resolve the concern through reflection alone.

The Module MUST NOT claim that it has clinically assessed the significance of the concern.

**Grounding:** Architecture — Scope and Limitations; Kernel — AI Limitations.

---

### SE-04 — Immediate safety MUST take priority over ordinary reflection

When a person indicates an immediate risk of harm to themselves or others, a Module MUST NOT continue an ordinary reflection workflow as though the situation were routine.

Instead, it SHOULD direct attention toward immediate real-world support appropriate to the person's location and circumstances.

HRA is not an emergency response service and MUST NOT delay access to emergency or in-person assistance.

**Grounding:** Architecture — Scope and Limitations; Kernel — Human Responsibility and AI Limitations.

---

### SE-05 — Ordinary uncertainty MUST NOT be pathologized

Modules MUST NOT treat ordinary uncertainty, discomfort, emotional difficulty, or challenging reflection as Evidence of a medical or psychological condition or as automatically requiring professional intervention.

Reflection is intended to support understanding, not to classify normal human experience as pathology.

**Grounding:** Architecture — Working Hypotheses and Scope; Kernel — Context Preservation.

---

### SE-06 — Escalation MUST NOT be framed as failure

Seeking external support, pausing reflection, or recognizing the limits of HRA does not indicate that reflection failed.

Escalation recognizes that the current situation exceeds the intended Scope or responsibility of HRA.

Appropriate support may be personal, community-based, institutional, professional, or emergency-based depending on Context.

**Grounding:** Architecture — Scope and Responsibility Boundaries; Kernel — Human Responsibility.

---

### SE-07 — Reflection MUST remain voluntary

A Module MUST NOT pressure a person to begin or continue reflection against their expressed preference.

Declining, pausing, or ending reflection MUST NOT be framed as avoidance, failure, or non-compliance.

A Module MAY explain available options, but it MUST preserve the person's ability to stop.

A recommendation to pause or seek support MUST NOT erase the person's Agency or imply that HRA has made a professional determination about them.

**Grounding:** Architecture — Human Judgment Comes First; Kernel — Human Responsibility and Optional Conclusions.

---

## 8. Change and Evolution Guardrails

### CE-01 — Shared Guardrails require architectural grounding

Every proposed shared Guardrail MUST identify the Architecture principle, Kernel Guarantee, Runtime Responsibility, or documented risk that it operationalizes.

A Guardrail MUST NOT create a new architectural guarantee by implication.

**Grounding:** Architecture — Design Decisions and Evidence Sources; Kernel — Kernel Evolution.

---

### CE-02 — Kernel changes MUST require architectural Evidence

A single implementation preference, isolated inconvenience, or local optimization MUST NOT justify Kernel Revision.

Kernel evolution SHOULD be supported by repeated implementation Evidence, demonstrated incompatibility, or architectural inconsistency.

**Grounding:** Architecture — Evidence Before Expansion; Kernel — Kernel Evolution.

---

### CE-03 — Breaking Changes MUST remain explicit

Changes that weaken, remove, or redefine a Kernel Guarantee MUST NOT be presented as editorial clarification.

Breaking Changes require documented architectural review, compatibility analysis, and appropriate Versioning.

**Grounding:** Architecture — Design Decisions; Kernel — Versioning and Breaking Changes.

---

### CE-04 — Compatibility impact MUST remain visible

Proposed changes affecting the Kernel, Module Contract, or shared Guardrails SHOULD document their expected compatibility impact on existing Modules and repository artifacts.

**Grounding:** Architecture — Responsibility Boundaries; Kernel — Module Compatibility and Backward Compatibility.

---

### CE-05 — Discussion MUST NOT replace decision responsibility

Community discussion, review, and criticism improve architectural decisions.

They MUST NOT eliminate the responsibility of the repository's designated decision owner to adopt, revise, postpone, or reject a proposed change.

**Grounding:** Architecture — Human Judgment and Architectural Responsibilities; Kernel — Kernel Evolution.

---

### CE-06 — Complexity MUST NOT be mistaken for progress

Adding terminology, workflow steps, documentation, or implementation detail does not by itself improve HRA.

Architectural complexity SHOULD be introduced only when supported by documented need.

**Grounding:** Architecture — Evidence Before Expansion and Sustainable Growth; Kernel — Kernel Evolution.

---

## 9. Documentation Guardrails

### DO-01 — Documents MUST preserve their Architectural Responsibilities

Each document MUST remain responsible only for the role assigned by the Repository Architecture.

Content placement SHOULD follow responsibility rather than convenience.

**Grounding:** Architecture — Architectural Responsibilities and Responsibility Boundaries.

---

### DO-02 — Reference documents MUST NOT redefine source documents

The Glossary, templates, Examples, checklists, and other supporting documents MAY summarize or operationalize the Architecture and Kernel.

They MUST NOT redefine, weaken, or silently replace canonical principles.

Documentation MUST NOT introduce architectural principles that are absent from the Architecture or Kernel.

**Grounding:** Architecture — Repository Architecture and Responsibility Boundaries.

---

### DO-03 — Normative claims MUST remain traceable

Any normative requirement introduced outside the Architecture or Kernel MUST identify the Architecture section, Kernel section, Guardrail, or ADR from which it derives.

Derived guidance MUST remain visibly derived.

**Grounding:** Architecture — Evidence Sources and ADRs; Kernel — Kernel Evolution.

---

### DO-04 — Examples MUST NOT become universal rules

Reference Implementations, Examples, and Case Studies illustrate possible applications of HRA.

They MUST NOT be interpreted as mandatory workflows for every Module.

**Grounding:** Architecture — Repository Architecture and Responsibility Boundaries; Kernel — Module Independence.

---

### DO-05 — Documentation MUST preserve visible uncertainty

Open questions, provisional definitions, and known limitations SHOULD remain visible when they materially affect interpretation or implementation.

Documentation MUST NOT imply certainty where the repository intentionally remains undecided.

**Grounding:** Architecture — Evidence Before Judgment and Iterative Reflection; Kernel — Optional Conclusions.

---

### DO-06 — Architectural change MUST remain explicit

Changes affecting HRA's identity, Kernel Guarantees, responsibility boundaries, or Module Compatibility MUST be reviewed and documented as architectural changes rather than ordinary editorial revisions.

**Grounding:** Architecture — Design Decisions and ADRs; Kernel — Versioning and Kernel Evolution.

---

### DO-07 — Guardrail claims MUST reflect implemented behavior

Documentation MUST NOT claim that a Module preserves a Guardrail when its workflow, interface, defaults, or output behavior contradict that constraint.

A disclaimer, checklist response, or written policy alone does not establish conformance.

Documentation cannot compensate for behavior that violates the stated Guardrail.

**Grounding:** Architecture — Evidence Before Judgment; Kernel — Module Contract and Module Compatibility.

---

## Guardrail Responsibility

Guardrails constrain AI output, Module behavior, human-facing workflows, shared documentation, and architectural change within their stated Scope.

They do not guarantee correct outcomes, eliminate uncertainty, replace Human Judgment, substitute for professional services, or provide emergency response.

They cannot ensure that every person will read the documentation, that every implementation will conform, or that every harmful use will be prevented.

Their purpose is to preserve the boundaries established by the Architecture and Kernel while reducing foreseeable risks during implementation and use.
