import { Component, Input, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css',
  schemas: [NO_ERRORS_SCHEMA],
})
export class ContentCardComponent {
  @Input() title: string;
  @Input() body: string;

  constructor() {
    this.title = '';
    this.body = '';
  }
}
