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

      { 'photo': './assets/img/awards/cisco-cyber.png', 'title': 'CISCO - Cyber Security Certificate', 'description': 'The cyber security coarse I took years back in cisco', 'date': ' March 27, 2023' },
    ];

    return this.data;

  }
}
