import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() name = '';
  @Input() price = '';
  @Input() index = 0;
  @Output() add = new EventEmitter();

  constructor() { }

  addItem() {
    this.add.emit(this.index);
  }

  ngOnInit() {
  }

}
