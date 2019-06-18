import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseApi } from 'src/app/shared/core/base-api';
import { IWFMEvent } from '../models/event.model';


@Injectable()
export class EventsService extends BaseApi{
    constructor(public http: HttpClient) {
        super(http);
    }

    addEvent(event: IWFMEvent){
        return this.post('events', event);
    }

}
