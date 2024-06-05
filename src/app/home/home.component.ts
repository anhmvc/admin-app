import { Component, OnInit, NO_ERRORS_SCHEMA } from '@angular/core';
import { Content, ContentService } from '../content.service';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from '../content-card/content-card.component';
import { UploadDialogComponent } from '../upload-dialog/upload-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ContentCardComponent, UploadDialogComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class HomeComponent implements OnInit {
  DATA: Content[];
  FILENAMES: string[];

  constructor(private readonly contentService: ContentService) {
    this.DATA = [];
    this.FILENAMES = [];
  }

  ngOnInit() {
    this.DATA = this.contentService.getData();
    this.FILENAMES = this.contentService.getFilenames();
    this.contentService.dataUpdated.subscribe((data: Content[]) => {
      this.DATA = data;
    });
  }
}
