import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Atest Recipe', 'This is simple a test', 'https://images-na.ssl-images-amazon.com/images/I/718WyMfJu0L._SL1300_.jpg')
    new Recipe('Atest Recipe', 'This is simple a test', 'https://images-na.ssl-images-amazon.com/images/I/718WyMfJu0L._SL1300_.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

}
