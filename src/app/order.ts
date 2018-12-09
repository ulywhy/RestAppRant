import { Item } from './item';

export class Order {

  number: number;
  total: number;
  items: Item[];

  constructor(
    items: Item[]){
      this.items = items;
  }

  addItem(item: Item){
    this.item.push(item);
  }

  addItems(items: Item[]){

  }


}
