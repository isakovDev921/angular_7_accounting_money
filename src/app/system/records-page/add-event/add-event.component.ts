import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../../shared/models/category.model';
import { IWFMEvent } from '../../shared/models/event.model';
import * as moment from 'moment';
import { EventsService } from '../../shared/services/events.service';
import { BillService } from '../../shared/services/bill.service';
import { Bill } from '../../shared/models/bill.model';
import { mergeMap } from 'rxjs/operators';
import { Message } from 'src/app/shared/models/message.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {

  sub1: Subscription;
  sub2: Subscription;
  @Input() categories: Category[] = [];

  types = [
    { type: 'income', label: 'Доход' },
    { type: 'outcome', label: 'Расход' }
  ]; //создаем массив из 2х объектов

  message: Message;

  constructor(
    private eventsService: EventsService,
    private billService: BillService

  ) { }

  ngOnInit() {
    this.message = new Message('', '');
  }

  private showMessage(text: string) {
    this.message.text = text;

    window.setTimeout(() => {
      this.message.text = ''
    }, 5000);
  }

  onSubmit(form: NgForm) {
   // console.log(form.value);

    let { amount, description, category, type } = form.value;
    if (amount < 0) {
      amount *= -1;
    }

    const eventWFM: IWFMEvent = {
      type: type,
      amount: amount,
      category: category,
      date: moment().format('DD.MM.YYY HH:mm:ss'),
      description: description
    };
   // console.log(eventWFM);


    this.sub1 = this.billService.getBill()
      .subscribe((bill: Bill) => {
        let value = 0;
        if (type === 'outcome') {
          if (amount > bill.value) {
            this.message = new Message('danger', '');
            return this.showMessage(`На счету недостаточно средств. Вам не хватает ${amount - bill.value}`);
            
          } else {
            value = bill.value - amount;
          }
        } else if(type === 'income') {
          this.message = new Message('success', '');
          return this.showMessage(`Зачисление средств на счет произошло успешно: ${amount}. Доступно ${bill.value}`);
        }
        else {
          value = bill.value + amount;
        }

        this.sub2 = this.billService.updateBill({ value: value, currency: bill.currency })
          .pipe(mergeMap(() => this.eventsService.addEvent(eventWFM)))
          .subscribe(() => {
            form.setValue({
              amount: 0,
              description: ' ',
              category: 1,
              type: 'outcome'
            })
          });
      });

  }
  ngOnDestroy() {
    if (this.sub1) { this.sub1.unsubscribe(); }
    if (this.sub2) { this.sub2.unsubscribe(); }
  }

}
