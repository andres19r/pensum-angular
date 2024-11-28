import { Component, input } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-pensum-table',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './pensum-table.component.html',
  styleUrl: './pensum-table.component.scss',
})
export class PensumTableComponent {
  displayedColumns: string[] = ['name', 'state', 'semester', 'score'];
  dataSource = input<string[]>([]);
}
