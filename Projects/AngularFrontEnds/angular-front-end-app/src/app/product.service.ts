import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  // tslint:disable-next-line:typedef
  getProducts(){
    return [
      {
        id: 1234,
        type: 'orange',
        price: '0.11'
      },
      {
        id: 1234,
        type: 'apple',
        price: '0.12'
      },
      {
        id: 1254,
        type: 'pear',
        price: '0.18'
      },
      {
        id: 1654,
        type: 'banana',
        price: '0.16'
      }
    ];
  }
}
