import { Component, OnInit } from '@angular/core';
import { FoodSelectComponent } from '../food-select/food-select.component';
import { OrderService } from '../order.service';
import { FoodService } from '../food.service';
import { Food } from '../food';
import { Order } from '../order';
import { Item } from '../item';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {


  items: Item[] = new Array();

  constructor(
    private foodService: FoodService) {
    }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(){
    this.foodService.getFoods()
    .subscribe(foods => {
      this.items = foods.map(food => {
        return new Item(food);
      });
    });

  }
}
