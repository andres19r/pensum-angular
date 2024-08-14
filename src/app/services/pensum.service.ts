import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Pensum } from '../interfaces/pensum.interface';
import { Semester } from '../interfaces/semester.interface';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Subject } from '../interfaces/subject.interface';

@Injectable({
  providedIn: 'root',
})
export class PensumService {
  private url: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPensum(): Observable<Pensum> {
    return this.http.get<Pensum>(this.url + 'pensum');
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
