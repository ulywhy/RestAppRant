import { Component, OnInit, Input } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {

  @Input() food: Food;
  
  constructor() { }

  ngOnInit() {
  }

}
