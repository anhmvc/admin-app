import { Injectable, EventEmitter } from '@angular/core';
import { TEST_DATA } from '../testing/TEST_DATA';

/** Content interface */
export interface Content {
  question: string;
  answer: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContentService {
  data: Content[] = TEST_DATA;
  dataUpdated = new EventEmitter<Content[]>();

  constructor() {}

  getData(): Content[] {
    return this.data;
  }

  getFilenames(): string[] {
    return [
      'FAQs - Empowered Girls Mobilisers Screening and Orientation.csv',
      'FAQs - Learner Mobilisation.csv',
      'FAQs - Main Camp Delivery.csv',
      'FAQs - Pre Camp Readiness.csv',
      'FAQs - Pre Camp Readiness.csv',
      'FAQs - Reasoning.csv',
    ];
  }

  uploadData(newContent: Content) {
    this.data.push(newContent);
    this.dataUpdated.emit(this.data);
  }
}
