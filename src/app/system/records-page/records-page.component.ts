import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Category } from '../shared/models/category.model';
import { CategoriesService } from '../shared/services/categories.service';


@Component({
  selector: 'wfm-records-page',
  templateUrl: './records-page.component.html',
  styleUrls: ['./records-page.component.scss']
})
export class RecordsPageComponent implements OnInit {


  categories: Category[] = []; //создает поте типа ICategory и присваеваем ему пустой массив;
  isLoaded = false;

  constructor(
    private categoriesService: CategoriesService
  ) { }

  ngOnInit() {
    this.categoriesService.getCategories()
      .subscribe((categories: Category[]) => {
        this.categories = categories;
        this.isLoaded = true; //как только загрузились все категории, тогда можно рисовать все компоненты
      });
  }

  onSubmit(form: NgForm) {

  }

  newCategoryAdded(category: Category) {
    this.categories.push(category);
  }

  categoryWasEdited(category: Category){
    const idx = this.categories.findIndex(c => c.id === category.id);
    this.categories[idx] = category;
  }
  

}
