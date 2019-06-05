import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { Bill } from '../shared/models/bill.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;
  currency: any;
  bill: Bill;
  isLoaded = false;//загрузились ли сейчас данные?
  date: Date = new Date();

  constructor(private billService: BillService) { }

  ngOnInit() {

    this.sub1 =
      combineLatest( //подписывается на 2 асинхронных события,
        // для синхронного отображения представления
        this.billService.getBill(),
        this.billService.getCurrency(this.getMomentDate())
      ).subscribe((data: [Bill, any]) => {
        this.bill = data[0];
        this.currency = data[1];
        this.isLoaded = true;
      }
      );
  }

  //чтобы подписка не съедала память, нужно делать отписку
  ngOnDestroy() {
    this.sub1.unsubscribe();
    if (this.sub2) {
    
      this.sub2.unsubscribe();
    }
  
  }

  onRefresh() {
    this.isLoaded = false;
    this.sub2 = this.billService.getCurrency(this.getMomentDate()).subscribe((currency: any) => {
      this.currency = currency;
      this.isLoaded = true;
    })
  }

  getMomentDate() {
    var mm = this.date.getMonth() + 1; // getMonth() is zero-based
    var dd = this.date.getDate();

    return [this.date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
  };

}

