import { Component, inject, OnInit } from '@angular/core';
import { Pensum, Semester } from '../../interfaces';
import { PensumService } from '../../services/pensum.service';
import { CommonModule } from '@angular/common';
import { SemesterComponent } from '../semester/semester.component';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateSubjectComponent } from '../create-subject/create-subject.component';
import { PensumTableComponent } from '../pensum-table/pensum-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    SemesterComponent,
    MatButtonModule,
    MatDialogModule,
    PensumTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _pensumService = inject(PensumService);
  private dialog = inject(MatDialog);

  $pensum: Observable<Pensum> = new Observable<Pensum>();
  $semesters: Observable<Semester[]> = new Observable<Semester[]>();

  constructor() {}

  ngOnInit(): void {
    this.$pensum = this._pensumService.getPensum();
    this.$semesters = this._pensumService.getAllSemesters();
  }

  openCreateSubjectDialog() {
    const dialogRef = this.dialog.open(CreateSubjectComponent);
  }
}
