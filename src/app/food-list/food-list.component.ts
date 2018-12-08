import { Component, OnInit } from '@angular/core';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods : Food[];

  constructor(
    private foodService: FoodService) {
  }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(){
    this.foodService.getFoods()
      .subscribe(foods => {
        this.foods = foods;
        console.log(foods);
      });
  }
}
