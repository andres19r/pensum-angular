import { Component, Input } from '@angular/core';
import { Semester } from '../../interfaces/semester.interface';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-semester',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './semester.component.html',
  styleUrl: './semester.component.scss'
})
export class SemesterComponent {
  @Input() semester: Semester = {} as Semester;
  displayedColumns: string[] = ['code', 'name', 'score', 'state', 'prerequisite']
}
