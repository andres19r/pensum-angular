import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { PensumService } from '../../services/pensum.service';
import { Semester, Subject } from '../../interfaces';

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './semester.component.html',
  styleUrl: './semester.component.scss',
})
export class SemesterComponent {
  private readonly _pensumService = inject(PensumService);
  @Input() semester: Semester = {} as Semester;
  displayedColumns: string[] = [
    'code',
    'name',
    'score',
    'state',
    'prerequisite',
  ];

  addSubject() {
    const mockSubjectToCreate: Subject = {
      name: 'Calculo III',
      state: 'Approved',
      score: 68,
      semester: 3,
      pensumId: ''
    };
    this._pensumService
      .createSubject(mockSubjectToCreate)
      .subscribe(console.log);
  }
}
