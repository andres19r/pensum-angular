import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateSemester, Pensum, Semester, Subject } from '../interfaces';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PensumService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPensum(): Observable<Pensum> {
    return this.http.get<Pensum>(this.url + 'pensum');
  }

  createPensum(newPensum: CreateSemester): Observable<Pensum> {
    return this.http.post<Pensum>(this.url + 'pensum', newPensum);
  }

  getAllSemesters(): Observable<Semester[]> {
    return this.http.get<Semester[]>(this.url + 'semesters');
  }

  getSemesterById(id: number): Observable<Semester> {
    return this.http.get<Semester>(this.url + `semesters/${id}`);
  }

  createSubject(subjectToCreate: Subject) {
    return this.http.post(this.url + 'subjects', subjectToCreate);
  }
}
