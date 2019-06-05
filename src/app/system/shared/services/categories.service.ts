import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BaseApi } from 'src/app/shared/core/base-api';
import { ICategory } from '../models/category.model';
import { Observable } from 'rxjs';

@Injectable()
export class CategoriesService extends BaseApi{
    constructor(public http: HttpClient) {
        super(http);
    }

    addCategory(category: ICategory){
        return this.post('categories', category);
    }
}