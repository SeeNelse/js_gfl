import { Injectable } from '@angular/core';

@Injectable()
export class ShareService {
  list = JSON.parse(localStorage.listCw13 || JSON.stringify(['First','Second']));
  
  constructor() {
    
  }

}
