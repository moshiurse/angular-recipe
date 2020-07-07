import { Component, OnInit } from '@angular/core';

import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Salad', 10),
    new Ingredient('Apple', 5),
    new Ingredient('carrot', 8)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
