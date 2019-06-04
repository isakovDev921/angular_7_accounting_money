import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Bill } from '../models/bill.model';

@Injectable() //декоратор для инжекции Http обьекта в класс
export class BillService {

    constructor(private httpClient: HttpClient) {
    }

    getBill() {
        return this.httpClient.get('http://localhost:3000/bill');
        
    }

    getCurrency() {
        return this.httpClient.get('http://data.fixer.io/api/2013-03-16?access_key=8a190f5eaf2726e0c490de5368a7264d&symbols=USD,UAH,RUB&format=1'); 
    }
}