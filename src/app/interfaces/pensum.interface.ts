import { Semester } from './semester.interface';

export interface CreateSemester {
  career: string;
  university: string;
}

export interface Pensum extends CreateSemester {
  _id: string;
  semesters: Semester[];
}
