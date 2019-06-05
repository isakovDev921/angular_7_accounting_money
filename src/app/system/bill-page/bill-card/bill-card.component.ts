import { Component, OnInit, Input } from '@angular/core';
import { Bill } from '../../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-card',
  templateUrl: './bill-card.component.html',
  styleUrls: ['./bill-card.component.scss']
})
export class BillCardComponent implements OnInit {

  @Input() bill: Bill;
  @Input() currency: any;

  constCurrency = 1;
  dollar: number;
  euro: number; 

  constructor() { }

  ngOnInit() {

    const { rates } = this.currency;   
   // this.dollar = Number((rates['UAH'] / rates['USD']).toFixed(2)) * this.bill.value;
   // this.euro = Number((rates['UAH']).toFixed(2)) * this.bill.value;

    this.dollar = (rates['UAH'] / rates['USD']) * this.bill.value;
    this.euro = rates['UAH'] * this.bill.value;

    console.log(this.currency);
  }

}
