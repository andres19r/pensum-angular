import { Component, inject, OnInit } from '@angular/core';
import { Pensum } from '../../interfaces/pensum.interface';
import { PensumService } from '../../services/pensum.service';
import { CommonModule } from '@angular/common';
import { SemesterComponent } from '../semester/semester.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SemesterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  private readonly _pensumService = inject(PensumService);

  pensum: Pensum = {} as Pensum;

  constructor() {}

  ngOnInit(): void {
    this._pensumService.getPensum().subscribe((pensum) => {
      this.pensum = pensum;
    });
  }
}
