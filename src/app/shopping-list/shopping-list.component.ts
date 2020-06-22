import { Component, OnInit } from '@angular/core';
import { ingredient } from '../models/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

ingredient : ingredient[] = [
  new ingredient('Apple', 50),
  new ingredient('Mango', 500),
]



  constructor() { }

  ngOnInit(): void {
  }

}
