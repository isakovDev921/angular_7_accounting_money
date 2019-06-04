import { Component, OnInit, OnDestroy } from '@angular/core';
import { BillService } from '../shared/services/bill.service';
import { Observable, combineLatest, Subscription } from 'rxjs';
import { Bill } from '../shared/models/bill.model';

@Component({
  selector: 'wfm-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor(private billService: BillService) { }

  ngOnInit() {
    this.subscription =
      combineLatest( //подписывается на 2 асинхронных события,
        // для синхронного отображения представления
        this.billService.getBill(),
        this.billService.getCurrency()
      ).subscribe((data: [Bill, any]) => {
        console.log(data);
      }
      );
  }

  //чтобы подписка не съедала память, нужно делать отписку
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
