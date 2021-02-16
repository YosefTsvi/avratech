import { Component } from '@angular/core';
import { CoinsService } from './coins.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sear: any;
  beni: any;
  outlook = true;
  constructor(public coinsService: CoinsService) { }
  show() {
    this.outlook = !this.outlook;
  }

  getSearch(id): void {
    this.coinsService.getCoin(id).subscribe(coin =>
      this.sear = coin);
      console.log(id);
  }

}
