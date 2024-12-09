import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
import {SubjectState} from "../../interfaces";

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
    MatDialogModule,
  ],
  templateUrl: './create-subject.component.html',
  styleUrl: './create-subject.component.scss',
})
export class CreateSubjectComponent {
  subjectStates = [...Object.values(SubjectState)];
  subjectForm = this.formBuilder.group({
    name: ['', Validators.required],
    state: ['', Validators.required],
    score: [undefined],
    semester: [1, Validators.required],
  });

  constructor(private readonly formBuilder: FormBuilder) {}
}
