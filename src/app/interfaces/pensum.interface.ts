import { Semester } from './semester.interface';

export interface Pensum {
  id: number;
  career: string;
  university: string;
  semesters: Semester[];
}
