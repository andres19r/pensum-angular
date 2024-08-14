export interface Subject {
  id: string;
  name: string;
  state: SubjectState;
  score?: number;
  prerequisite?: string;
  semester: number;
}

export type SubjectState = 'Approved' | 'Reproved' | 'In progress';
