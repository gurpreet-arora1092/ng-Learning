import { Component, OnInit } from '@angular/core';
import { recipe } from '../models/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
recipe: recipe[] =  [
  new recipe('My First Recipe Okra' , ' This is my First Recipe Okra','https://www.cookwithmanali.com/wp-content/uploads/2014/04/Bhindi-Masala-500x500.jpg'),
  new recipe('My First Recipe Okra' , ' This is my First Recipe Okra','https://www.cookwithmanali.com/wp-content/uploads/2014/04/Bhindi-Masala-500x500.jpg'),
  new recipe('My First Recipe Okra' , ' This is my First Recipe Okra','https://www.cookwithmanali.com/wp-content/uploads/2014/04/Bhindi-Masala-500x500.jpg'),
  new recipe('My First Recipe Okra' , ' This is my First Recipe Okra','https://www.cookwithmanali.com/wp-content/uploads/2014/04/Bhindi-Masala-500x500.jpg'),
  new recipe('My First Recipe Okra' , ' This is my First Recipe Okra','https://www.cookwithmanali.com/wp-content/uploads/2014/04/Bhindi-Masala-500x500.jpg'),



];
  constructor() { }

  ngOnInit(): void {
  }

}
