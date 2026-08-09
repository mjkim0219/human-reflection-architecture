export type CandidateDisposition =
  | "pending"
  | "accepted"
  | "rejected"
  | "reclassified";

export type ObservationOrigin =
  | "human"
  | "llm";

export type ReflectionState =
  | "collecting_event"
  | "reviewing_observations"
  | "reviewing_interpretations"
  | "awaiting_next_action"
  | "revising"
  | "completed"
  | "stopped";

export type HistoryEventType =
  | "event_submitted"
  | "observation_candidate_accepted"
  | "observation_candidate_rejected"
  | "observation_candidate_reclassified"
  | "observation_added_by_human"
  | "observation_superseded"
  | "human_judgment_submitted"
  | "revision_started"
  | "reflection_completed"
  | "reflection_stopped";

export interface ObservationCandidate {
  id: string;
  text: string;
  disposition: CandidateDisposition;
}

export interface ConfirmedObservation {
  id: string;
  text: string;
  origin: ObservationOrigin;
  originCandidateId?: string;
  supersedesObservationId?: string;
}

export interface InterpretationCandidate {
  id: string;
  text: string;
  revisionNumber: number;
}

export interface HumanJudgment {
  id: string;
  text: string;
  revisionNumber: number;
  basedOnObservationIds: string[];
}

export interface HistoryEvent {
  id: string;
  sequence: number;
  type: HistoryEventType;
  revisionNumber: number;
  subjectId?: string;
}

export interface ReflectionSession {
  id: string;
  rawEvent?: string;

  state: ReflectionState;
  revisionCount: number;

  observationCandidates: ObservationCandidate[];
  observations: ConfirmedObservation[];
  interpretationCandidates: InterpretationCandidate[];
  humanJudgments: HumanJudgment[];
  history: HistoryEvent[];
}
