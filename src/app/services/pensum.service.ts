import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CreateSemester, Pensum, Subject } from '../interfaces';
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

  getAllSubjects(): Observable<Subject[]> {
    return this.http.get<Subject[]>(this.url + 'subjects');
  }

  getSubjectById(id: string): Observable<Subject> {
    return this.http.get<Subject>(this.url + `subjects/${id}`);
  }

  createSubject(subjectToCreate: Subject) {
    return this.http.post(this.url + 'subjects', subjectToCreate);
  }
}
