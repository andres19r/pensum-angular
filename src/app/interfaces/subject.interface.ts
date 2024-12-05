export interface Subject {
  name: string;
  state: SubjectState;
  semester: number;
  score?: number;
  pensumId: string;
}

export type SubjectState = 'Approved' | 'Reproved' | 'In progress';
