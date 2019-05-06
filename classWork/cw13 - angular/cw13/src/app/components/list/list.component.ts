import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../services/share.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [ShareService]
})
export class ListComponent implements OnInit {

  title = 'Hello agnular';
  new_item = '';

  constructor(private ss: ShareService) {}

  ngOnInit() {
  }

  addItem() {
    this.ss.add(this.new_item);
    this.new_item = '';
  }

  removeItem(index) {
    this.ss.list.splice(index, 1);
  }

  get count_items() {
    return this.ss.list.length;
  }

  get list() {
    return this.ss.list;
  }

  set list(val) {
    console.log(val)
  }

}
