import {
  Component,
  inject,
  OnInit,
  signal,
  WritableSignal,
} from '@angular/core';
import {Pensum, Semester, Subject} from '../../interfaces';
import { PensumService } from '../../services/pensum.service';
import { CommonModule } from '@angular/common';
import { SemesterComponent } from '../semester/semester.component';
import { lastValueFrom, Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateSubjectComponent } from '../create-subject/create-subject.component';
import { PensumTableComponent } from '../pensum-table/pensum-table.component';
import { CreatePensumComponent } from '../create-pensum/create-pensum.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatDialogModule,
    PensumTableComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly pensumService = inject(PensumService);
  private dialog = inject(MatDialog);
  pensum = signal<Pensum | null>(null)
  subjects = signal<Subject[]>([]);


  constructor() {}

  async ngOnInit(): Promise<void> {
    this.pensum = signal(await lastValueFrom(this.pensumService.getPensum()))
    this.subjects = signal(await lastValueFrom(this.pensumService.getAllSubjects()))
  }

  openCreatePensumDialog(): void {
    const dialogRef = this.dialog.open(CreatePensumComponent);
    dialogRef.afterClosed().subscribe(async (newPensum) => {
      if (newPensum) {
        const pensumCreated = await lastValueFrom(
          this.pensumService.createPensum(newPensum),
        );
        this.pensum.set(pensumCreated);
      }
    });
  }

  openCreateSubjectDialog() {
    const dialogRef = this.dialog.open(CreateSubjectComponent);
  }
}
