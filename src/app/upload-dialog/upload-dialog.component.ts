import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Content, ContentService } from '../content.service';

/**
 * Upload dialog component.
 */
@Component({
  selector: 'app-upload-dialog',
  standalone: true,
  imports: [MatButtonModule],
  templateUrl: './upload-dialog.component.html',
  styleUrl: './upload-dialog.component.css',
})
export class UploadDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(UploadDialogContent);
  }
}

/**
 * Upload dialog content component.
 */
@Component({
  selector: 'upload-dialog-content',
  templateUrl: 'upload-dialog-content.html',
  styleUrl: './upload-dialog.component.css',
  standalone: true,
  imports: [
    MatButtonModule,
    MatDialogActions,
    MatDialogClose,
    MatDialogTitle,
    MatDialogContent,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
  ],
})
export class UploadDialogContent {
  formData: Content = {
    question: '',
    answer: '',
  };
  constructor(
    public dialogRef: MatDialogRef<UploadDialogContent>,
    private readonly contentService: ContentService
  ) {}

  onCancel() {
    this.dialogRef.close();
  }

  onSave() {
    this.contentService.uploadData(this.formData);
    this.dialogRef.close();
  }
}
