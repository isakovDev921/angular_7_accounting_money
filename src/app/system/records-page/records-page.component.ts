import { Component, OnInit } from '@angular/core';
import { ICategory } from '../shared/models/category.model';

@Component({
  selector: 'wfm-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newCategoryAdd(category: ICategory){
  }

}
