import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bill } from '../models/bill.model';
import { BaseApi } from 'src/app/shared/core/base-api';

@Injectable() //декоратор для инжекции Http обьекта в класс
export class BillService extends BaseApi {

    constructor(public http: HttpClient) {
        super(http)
    }

    getBill() {
        return this.get('bill');
    }

    updateBill(bill: Bill) {
        return this.put('bill', bill);
    }    

    getCurrency(date) {
        return this.http.get(`http://data.fixer.io/api/${date}?access_key=8a190f5eaf2726e0c490de5368a7264d&symbols=USD,UAH,RUB&format=1`);
    }
   
}