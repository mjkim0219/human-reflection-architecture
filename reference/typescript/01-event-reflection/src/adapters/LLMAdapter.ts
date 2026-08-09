import {
  ObservationCandidate,
  InterpretationCandidate,
  ConfirmedObservation,
} from "../domain/types";

export interface LLMAdapter {
  generateObservationCandidates(
    rawEvent: string
  ): Promise<ObservationCandidate[]>;

  generateInterpretationCandidates(
    rawEvent: string,
    observations: ConfirmedObservation[],
    revisionNumber: number
  ): Promise<InterpretationCandidate[]>;
}
