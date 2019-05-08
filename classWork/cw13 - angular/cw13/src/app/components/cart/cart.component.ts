import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  title ='Cart';

  constructor(private ss: ShareService) { }

  ngOnInit() {
  }

  remove(index) {
    this.ss.products[index].count--;
    localStorage.shopCw14 = JSON.stringify(this.products);
  }

  total() {
    let totalPrice = 0;
    this.ss.products.forEach(element => {
      if (element.count) {
        totalPrice += element.price * element.count;
      }
    });
    return totalPrice;
  }

  get products () {
    return this.ss.products;
  }

}
