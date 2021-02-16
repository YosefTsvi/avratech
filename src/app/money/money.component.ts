import { Component, OnInit, Input } from '@angular/core';
import { CoinsService } from '../coins.service';
import { InvestmentService } from '../investment.service';
@Component({
  selector: 'app-money',
  templateUrl: './money.component.html',
  styleUrls: ['./money.component.css']
})
export class MoneyComponent implements OnInit {
  @Input() coinss: any;
  money: any;
  count = 0;
  error = '';
  avi=0;
  constructor(public coinsService: CoinsService, public investmentService: InvestmentService) {

  }

  ngOnInit(): void {
  }

  moreInfo(id): void {
    this.count += 1;
    if (this.count > 6) {
      this.error = 'אדוני היקר, המערכת שמחה לעמוד לשירותך תמיד, נא רענן את המערכת ולחץ שוב'
    }
    else if (this.count % 2 == 1) {
      this.coinsService.getCoin(id).subscribe(coin1 =>
        this.money = coin1);
    }
    else {
      this.money = null;
    }
  }
  investor(id): void {
    this.avi+=1;
    if(this.avi>5)
    this.investmentService.investor(id);
  else
   this.avi = null;
    
}
  }
 
  



