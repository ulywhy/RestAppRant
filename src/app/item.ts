import { Food } from './food';

export class Item {
  count: number;
  food: Food;
  subTotal: number;

  constructor(
    food: Food){
      this.food = food;
  }
}
