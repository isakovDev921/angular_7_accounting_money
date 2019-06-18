import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import { ICategory } from '../../shared/models/category.model';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'wfm-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  @Input() categories: ICategory[] = []; //Массив по умолчанию пустой
  @Output() onCategoryEdit = new EventEmitter<ICategory>();

  constructor(
  ) { }

  ngOnInit() {    
  }

  onSubmit(form: NgForm) {

  }
}
