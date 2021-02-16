import { Component, OnInit } from '@angular/core';
import { CoinsService } from '../coins.service';

@Component({
  selector: 'app-coins',
  templateUrl: './coins.component.html',
  styleUrls: ['./coins.component.css']
})
export class CoinsComponent implements OnInit {
  coins: any;
  api = 'https://api.coingecko.com/api/v3/coins';
  constructor(public coinsService: CoinsService) { }

  ngOnInit(): void {
    this.coinsService.getCoins(this.api).subscribe(coinss =>
      this.coins = coinss);
  }

}
