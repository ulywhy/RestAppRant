import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Food }    from '../food';

@Component({
  selector: 'app-food-form',
  templateUrl: './food-form.component.html',
  styleUrls: ['./food-form.component.css']
})
export class FoodFormComponent {

  foodForm = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(0.0),
    description: new FormControl(''),
  });

  saveFood(){
    console.log(this.foodForm.controls.name.value);
  }
}
