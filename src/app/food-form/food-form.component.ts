import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent {

  constructor(
    private foodService: FoodService){

  }

  foodForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  getFoods(){
    return this.foodService.getFoods();
  }
}
