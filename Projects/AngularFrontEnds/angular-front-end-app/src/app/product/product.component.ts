import { Component, OnInit } from '@angular/core';
import {ProductService} from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;

  constructor(service: ProductService) {
    this.products = service.getProducts();
   /* this.products = [
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
    ];*/
  }

  ngOnInit(): void {
  }

}
