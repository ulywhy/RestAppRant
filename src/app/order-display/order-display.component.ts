import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.css']
})
export class OrderDisplayComponent implements OnInit {

  foods: Food[];

  constructor(
    private foodService: FoodService) {
  }

  ngOnInit() {
    this.getFood();
  }

  getOrder(){}


  getFood(){
    this.foodService.getFoods()
    .subscribe(foods => {
      this.foods = foods;
    });
  }
}
