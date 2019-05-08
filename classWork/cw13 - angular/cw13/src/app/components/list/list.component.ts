import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  title ='Products';

  constructor(private ss: ShareService) {}
  
  ngOnInit() {
  }

  add(index) {
    this.products[index].count++;
    localStorage.shopCw14 = JSON.stringify(this.products);
  }

  get products () {
    return this.ss.products;
  }

}
