import { Component, Input } from '@angular/core';
import { ShareService } from './services/share.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private ss: ShareService) {}

  // cartCount = ;

  cartCount() {
    let allCount = 0;
    this.ss.products.forEach(element => {
      allCount += element.count;
    });
    return allCount;
  }
}
