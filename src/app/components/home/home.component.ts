import { Component, inject, OnInit } from '@angular/core';
import { Pensum } from '../../interfaces/pensum.interface';
import { PensumService } from '../../services/pensum.service';
import { CommonModule } from '@angular/common';
import { SemesterComponent } from '../semester/semester.component';
import { Semester } from '../../interfaces/semester.interface';
import { Observable } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SemesterComponent, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _pensumService = inject(PensumService);

  $pensum: Observable<Pensum> = new Observable<Pensum>();
  $semesters: Observable<Semester[]> = new Observable<Semester[]>();

  constructor() {}

  ngOnInit(): void {
    this.$pensum = this._pensumService.getPensum();
    this.$semesters = this._pensumService.getAllSemesters();
  }
}
