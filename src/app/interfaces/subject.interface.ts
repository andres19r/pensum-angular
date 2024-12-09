export interface Subject {
  name: string;
  state: SubjectState;
  semester: number;
  score?: number;
  pensumId: string;
}

export enum SubjectState {
  approved = "APPROVED",
  inProgress = "IN PROGRESS",
  pending = "PENDING",
  reproved = "REPROVED",
}
