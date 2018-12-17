import { Food } from './food';

export class Item {
  private _count: number;
  private _subtotal: number;
  food: Food;

  constructor(
    food: Food){
      this.food = food;
      this.count = 0.0;
      this._subtotal = 0.0;
  }

  set count(count: number){
    if(count >= 0){
      this._count = count;
      this.updateSubtotal();
    }
  }

  get count(): number{
    return this._count;
  }

  updateSubtotal(): void{
    this._subtotal = this.count * this.food.price;
  }

  get subtotal(): number{
    return this._subtotal;
  }
}
