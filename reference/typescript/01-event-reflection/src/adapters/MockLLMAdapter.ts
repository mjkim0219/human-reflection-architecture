import {
  ConfirmedObservation,
  InterpretationCandidate,
  ObservationCandidate,
} from "../domain/types";

import { LLMAdapter } from "./LLMAdapter";

export class MockLLMAdapter implements LLMAdapter {
  async generateObservationCandidates(
    rawEvent: string
  ): Promise<ObservationCandidate[]> {
    return [
      {
        id: "obs-candidate-001",
        text: "The presentation took place.",
        disposition: "pending",
      },
      {
        id: "obs-candidate-002",
        text: "Two people asked questions.",
        disposition: "pending",
      },
      {
        id: "obs-candidate-003",
        text: "The presentation went badly.",
        disposition: "pending",
      },
    ];
  }

  async generateInterpretationCandidates(
    rawEvent: string,
    observations: ConfirmedObservation[],
    revisionNumber: number
  ): Promise<InterpretationCandidate[]> {
    return [
      {
        id: `interpretation-${revisionNumber}-001`,
        text: "You may have rushed because you were nervous.",
        revisionNumber,
      },
      {
        id: `interpretation-${revisionNumber}-002`,
        text: "The questions may indicate audience engagement.",
        revisionNumber,
      },
    ];
  }
}