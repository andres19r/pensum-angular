import { Pensum } from '../interfaces/pensum.interface';

export const data: Pensum = {
  id: 1,
  university: 'UNANDES',
  career: 'Systems Engineering',
  semesters: [
    {
      num: 1,
      subjects: [
        {
          code: 'IDI-162',
          name: 'Idioma I',
          score: 70,
          state: 'Approved',
          prerequisite: 'none',
        },
        {
          code: 'ALS-113',
          name: 'Algebra Superior',
          score: 58,
          state: 'Approved',
          prerequisite: 'none',
        },
        {
          code: 'CAL-114',
          name: 'Calculo I',
          score: 63,
          state: 'Approved',
          prerequisite: 'none',
        },
      ],
    },
    {
      num: 2,
      subjects: [
        {
          code: 'INF-145',
          name: 'Informatica I',
          score: 100,
          state: 'Approved',
          prerequisite: 'none',
        },
        {
          code: 'CAL-215',
          name: 'Calculo II',
          score: 51,
          state: 'Approved',
          prerequisite: 'CAL-114',
        },
      ],
    },
  ],
};
