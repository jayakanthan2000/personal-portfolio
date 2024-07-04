import { Injectable } from '@angular/core';
import { Contacts } from '../interface/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor() { }

  getContacts(): Contacts{
    return {
      'github': 'https://github.com/jayakanthan2000',
      'linkedin': 'https://www.linkedin.com/in/jayakanthan-kumarasamy-043a56189/',
      'email': 'jayakanthankumarasamy@gmail.com',
      'phone1': '+91 8825849744',
    }
  }
}
