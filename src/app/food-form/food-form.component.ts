import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FoodService } from '../food.service';
import { Food } from '../food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})

export class FoodFormComponent {
  @ViewChild('foodName') foodNameRef: ElementRef;

  constructor(
    private foodService: FoodService){

  }

  foodForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(''),
    description: new FormControl(''),
  });

  saveFood(){
    let params = this.foodForm.controls;

    let food = new Food(
        params.name.value,
        params.price.value,
        params.description.value
    );
    
    this.foodService.saveFood(food);
    this.foodForm.reset();
    this.foodNameRef.nativeElement.focus();

  }
}
