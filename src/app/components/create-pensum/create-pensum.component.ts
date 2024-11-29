import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import {
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatOption } from '@angular/material/autocomplete';
import { MatSelect } from '@angular/material/select';
import { NgForOf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-pensum',
  standalone: true,
  imports: [
    MatButton,
    MatDialogActions,
    MatDialogClose,
    MatDialogContent,
    MatDialogTitle,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
  ],
  templateUrl: './create-pensum.component.html',
  styleUrl: './create-pensum.component.scss',
})
export class CreatePensumComponent {
  private fb = inject(FormBuilder);
  readonly dialogRef = inject(MatDialogRef);
  pensumForm = this.fb.group({
    career: ['', Validators.required],
    university: ['', Validators.required],
  });

  onSubmit() {
    this.dialogRef.close(this.pensumForm.value);
  }
}
