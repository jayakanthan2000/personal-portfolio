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
      'description': '',
      'from': 'Chennai, India',
      'live': 'Chennai, India',
      'born': 0,
      'gender': 'Male',
      'phone': 'jayakanthankumarasamy@gmail.com',
      'slogan': 'Diamonds are made under pressure.'
    };
  }
}
