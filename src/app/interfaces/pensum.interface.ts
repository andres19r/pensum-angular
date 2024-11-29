import { Semester } from './semester.interface';

export interface CreateSemester {
  career: string;
  university: string;
}

export interface Pensum extends CreateSemester {
  id: number;
  semesters: Semester[];
}
