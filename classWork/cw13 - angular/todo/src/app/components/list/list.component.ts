import { Component, OnInit, Input} from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  title ='Hello Angular';
  new_item = "";

  products = [
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
    {
      id: 65,
      name: 'teeeeeest',
      price: 600,
      count: 0,
    },
  ];

  constructor(private ss: ShareService) {}
  
  ngOnInit() {
  }

  add() {
    this.list.push(this.new_item);
    localStorage.listCw13 = JSON.stringify(this.list);
    this.new_item = "";
  }

  get count_items() {
    return this.list.length;
  }

  remove(index) {
    this.list.splice(index, 1);
  }

  get list() {
    return this.ss.list;
  }

}
