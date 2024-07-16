import { Injectable } from '@angular/core';
import { ServiceOffered } from '../interface/service-offered';

@Injectable({
  providedIn: 'root'
})
export class ServiceOfferedService {
  data: any;
  constructor() { }

  getServices(): ServiceOffered{
    this.data = [
      {title:'Payment Portal',description:'Creating a payment portal for students with the integration of the ICICI payment gateway',more:''},
      {title:`PRIME MINISTER's RELIEF FUNDS (PMRF)`,description:'Review and Admission process for PMRF research scholars.',more:''},
      {title:'WAKAtech',description:'Managing a product from production to shipment to delivery to a customer.',more:''}
    ];

    return this.data;
  }
}
