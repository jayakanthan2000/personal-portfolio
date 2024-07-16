import { Injectable } from '@angular/core';
import { Awards } from '../interface/awards';

@Injectable({
  providedIn: 'root'
})
export class AwardsService {
  data: any;

  constructor() { }

  getAwards(): Awards {
    this.data = [

      { 'photo': '', 'title': 'Resilean Award', 'description': 'The Resilean Award in recognition of outstanding resilience and dedication in the face of challenges', 'date': ' October, 2023' },
    ];

    return this.data;

  }
}
