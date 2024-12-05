import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {Subject} from "../../interfaces";

@Component({
  selector: 'app-pensum-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './pensum-table.component.html',
  styleUrl: './pensum-table.component.scss',
})
export class PensumTableComponent {
  displayedColumns: string[] = ['name', 'state', 'semester', 'score'];
  dataSource = input.required<Subject[]>();
}
