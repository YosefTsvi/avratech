import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvestmentService {
  arr = [];
  constructor() { }
  
  investor(id): void 
  {this.arr=id;
    // [this.i] = id;
    // this.i += 1;
    // console.log(this.arr);
  }
}
