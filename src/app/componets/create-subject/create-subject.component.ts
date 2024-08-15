import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-create-subject',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  templateUrl: './create-subject.component.html',
  styleUrl: './create-subject.component.scss',
})
export class CreateSubjectComponent {
  subjectForm = this.formBuilder.group({
    code: ['', Validators.required],
    name: ['', Validators.required],
    state: ['', Validators.required],
    score: [50],
    prerequisite: [''],
    semester: [1, Validators.required],
  });

  constructor(private readonly formBuilder: FormBuilder) {}
}
