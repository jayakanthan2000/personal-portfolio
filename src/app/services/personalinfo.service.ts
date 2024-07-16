import { Injectable } from '@angular/core';
import { PersonalInfo } from '../interface/personal-info';
@Injectable({
  providedIn: 'root'
})
export class PersonalinfoService {

  constructor() { }

  // Don't forget the observable
  getInfo(): PersonalInfo{
    return {
      'name':'Jayakanthan Kumarasamy',
      'who': 'Software Engineer',
      'photo': '/assets/img/me.jpg',
      'description': 'Driven and detail-oriented software engineer with experience in building and maintaining dynamic, user-friendly web applications. I have demonstrated ability to work collaboratively with cross-functional teams, taking projects from concept to launch and  to deliver high-quality projects on time.',
      'from': 'Chennai, India',
      'live': 'Chennai, India',
      'born': 0,
      'gender': 'Male',
      'phone': 'jayakanthankumarasamy@gmail.com',
      'slogan': 'Diamonds are made under pressure.'
    };
  }
}
