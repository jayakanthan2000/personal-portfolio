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
      {title:'WAKAtech',description:'Managing a product from production to shipment to delivery to a customer.',more:''}
    ];

    return this.data;
  }
}
