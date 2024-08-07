import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pensum } from '../interfaces/pensum.interface';
import { data } from '../data/db';
import { Semester } from '../interfaces/semester.interface';

@Injectable({
  providedIn: 'root',
})
export class PensumService {
  constructor() {}

  getPensum(): Observable<Pensum> {
    return of(data);
  }

  getSemesterByNumber(num: number): Observable<null | Semester> {
    const semester = data.semesters.find((sem) => sem.num === num);
    if (!semester) return of(null);

    return of(semester);
  }
}
