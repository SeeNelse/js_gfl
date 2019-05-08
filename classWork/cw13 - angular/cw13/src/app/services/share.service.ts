import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  productsArr = [
    {
      id: 1,
      name: 'milk',
      price: 100,
      count: 0,
    },
    {
      id: 2,
      name: 'bread',
      price: 200,
      count: 0,
    },
    {
      id: 3,
      name: 'oil',
      price: 300,
      count: 0,
    },
    {
      id: 4,
      name: 'apple',
      price: 400,
      count: 0,
    },
    {
      id: 5,
      name: 'carrot',
      price: 500,
      count: 0,
    },
    {
      id: 6,
      name: 'banana',
      price: 600,
      count: 0,
    },
  ];
  products = JSON.parse(localStorage.shopCw14 || JSON.stringify(this.productsArr));
  
  constructor() {
    
  }

}
