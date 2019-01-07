import { Component, OnInit } from '@angular/core';
import {Observable } from 'rxjs';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  foods : Observable<Food[]>;

  constructor(
    private foodService : FoodService) {
  }

  ngOnInit() {
    this.getFoods();
  }

  getFoods(){
    this.foods = this.foodService.getFoods();
  }

  onDelete(food : Food){
    this.foodService.delete(food).subscribe(
      res => {
        //show warning message(ask if really wants to delete order)
        this.getFoods();
      },
      err => {
        console.log(err);
      }
    );
  }
}
