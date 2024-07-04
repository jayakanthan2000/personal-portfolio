import { Injectable } from '@angular/core';
import { EducationBackground } from '../interface/education-background';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  data: any;

  constructor() { }

  getEducation(): EducationBackground{
    this.data = [
                  [
                    {'year':'2017 - 2021','position':'Bachelor of Engineering (Electronics and communication)','place':'Rajalakshmi Institute of Technology'},
                    {'year':'2016 - 2017','position':'HSC','place':'Velammal Matric Hr. Sec. School','description':''},
                  ],
                  [
                    {'year':'Nov 2021 - Present','position':'Software Engineer (Full Stack Web Developer)','place':'Chennai','description':['Developing User-friendly Applications for Educational and Corporate Purposes.', 'Creating server-side logic and APIs using Express.js and Node.js.', 'Testing and debugging web applications to ensure high performance and reliability.', 'Designing and implementing databases using PostgreSQL.', 'Troubleshooting and fixing technical issues in a timely manner.', 'Having Work Experience in Multiple Projects.']},
                  ]
    ];
    return this.data;

  }
}
