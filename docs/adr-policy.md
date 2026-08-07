# ADR Policy

## 1. Purpose

Architecture Decision Records (ADRs) document significant architectural decisions made during the evolution of Human Reflection Architecture (HRA).

Their purpose is to preserve the reasoning behind decisions that materially influence HRA's architecture, shared responsibilities, or long-term evolution.

ADRs answer a single question:

> **Why was this architectural decision made?**

They do not replace canonical HRA documents, describe implementation history, or serve as a changelog.

Instead, ADRs preserve the historical context behind important architectural decisions so that future maintainers and contributors can understand the reasoning that shaped HRA.

The primary audience for ADRs is HRA maintainers and contributors.

While ADRs are publicly readable, understanding or using HRA does not require reading them.

An ADR records architectural reasoning.

The current architecture is always defined by the corresponding canonical documents.

---

## 2. When an ADR is Required

An ADR is required when a decision materially affects HRA's architecture, shared responsibilities, long-term evolution, or the interpretation of its canonical documents.

The purpose of an ADR is to preserve architectural reasoning rather than implementation history.

An ADR SHOULD be created when both of the following questions can reasonably be answered **Yes**:

1. **Would reversing this decision materially change HRA's principles, responsibility boundaries, shared contracts, compatibility, or long-term evolution?**

2. **Would a future maintainer reasonably need to understand why this decision was made?**

If either answer is **No**, an ADR is normally unnecessary.

Ordinary implementation decisions, editorial improvements, documentation refinements, bug fixes, refactoring, formatting changes, and routine maintenance SHOULD be documented through normal version control history rather than ADRs.

Examples of decisions that typically require an ADR include:

- introducing or removing an architectural concept;
- changing shared responsibilities defined by the Kernel;
- introducing, removing, or materially redefining a shared Guardrail;
- introducing a new architectural layer or contract;
- making a significant Module-level architectural decision that establishes a reusable design pattern; or
- changing a decision that affects future architectural evolution.

The existence of an ADR does not imply that the recorded decision is correct or permanent.

An ADR records that a significant architectural decision has been made and preserves the reasoning behind that decision.

Architectural significance SHOULD be evaluated using the decision criteria defined in this section rather than the location of the affected document.

---

## 3. Architectural Scope

ADRs may record significant decisions affecting any architectural layer or shared design responsibility within HRA.

The architectural significance of a decision depends on its effect on HRA, not on the document in which the change appears.

ADR scope may include decisions affecting:

- **Architecture** — the overall structure, responsibility model, or major conceptual layers of HRA;
- **Kernel** — shared guarantees, Runtime Responsibilities, compatibility expectations, or other core contractual responsibilities;
- **Guardrails** — shared operational boundaries, prohibited behavior, or risk-related constraints;
- **Modules** — significant architectural decisions whose effects extend beyond routine implementation details; or
- **cross-cutting relationships** — decisions that materially affect how multiple HRA components interact, evolve, or remain compatible.

Not every change within these areas requires an ADR.

Editorial changes, local implementation choices, isolated Module details, and other changes without material architectural significance remain outside ADR scope.

An ADR MAY originate from work on a specific Module when that work reveals a broader architectural issue or reusable design decision.

Such a decision SHOULD be recorded at the level of architectural impact rather than treated as universally applicable merely because it first appeared in one Module.

ADRs record decisions across HRA.

They do not create an additional architectural layer between canonical documents.

---

## 4. Architectural Effect

Writing an ADR does not by itself modify HRA.

An ADR records a proposed, accepted, rejected, or superseded architectural decision.

Acceptance of an ADR does not itself change the architecture.

Architectural changes are not considered effective until the corresponding canonical documents have been reviewed, updated, and versioned as appropriate.

An accepted ADR documents the reasoning behind an architectural decision.

It does not replace or override the Architecture, Kernel, Guardrails, Module specifications, or any other canonical HRA document.

Contributors SHOULD treat ADRs as records of architectural reasoning rather than independent sources of architectural truth.

---

## 5. Relationship to Canonical Documents

Canonical HRA documents define the current architecture.

If an inconsistency exists between an ADR and a canonical document, the canonical document always takes precedence.

Historical ADRs remain part of HRA's permanent architectural record.

Accepted ADRs SHOULD remain historically stable.

Historical architectural reasoning SHOULD NOT be rewritten to reflect later architectural decisions.

Substantive architectural changes SHOULD normally be documented through a new ADR rather than modifying an accepted ADR.

Superseded ADRs remain valuable because they preserve the historical context in which architectural decisions were made.

When practical, superseded ADRs SHOULD reference the ADR that replaced them.

Maintainers SHOULD preserve consistency between ADR history and canonical documents to minimize architectural drift.

---

## 6. ADR Lifecycle

Every ADR represents the recorded state of an architectural decision at a particular point in HRA's evolution.

An ADR SHOULD be assigned one of the following statuses.

### Proposed

The architectural decision has been documented for discussion or review.

It does not represent an accepted change to HRA.

---

### Accepted

The architectural decision has been accepted.

Any resulting architectural changes are not considered effective until the corresponding canonical documents have been updated.

Accepted ADRs SHOULD remain historically stable.

Substantive architectural revisions SHOULD normally be recorded through a new ADR rather than rewriting an accepted ADR.

---

### Rejected

The proposed architectural decision has been reviewed but not adopted.

Rejected ADRs SHOULD be retained to preserve architectural history and avoid repeated discussion of previously evaluated architectural alternatives.

---

### Superseded

The architectural decision has been replaced by a later ADR.

Superseded ADRs remain part of HRA's permanent architectural record.

When practical, they SHOULD reference the ADR that superseded them.

---

This policy governs how Architecture Decision Records are documented and maintained within HRA.

It does not define HRA governance, project leadership, contribution processes, or architectural decision-making procedures.
