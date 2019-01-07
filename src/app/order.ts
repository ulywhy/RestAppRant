import { Item } from './item';

export class Order {

  _id: any;
  number: number;
  total: number;
  itemsSet: Set<Item>;
  items : Array<Item>;
  paid: boolean;
  date: any;

  constructor(){
    this.number = 0;
    this.total = 0;
    this.itemsSet = new Set<Item>([]);
    this.items = [];
    this.served = false;
    this.paid = false;
    this.date = Date.now();
  }

  addItem(item: Item){
    if(item.count === 0){
      this.itemsSet.delete(item);
    }else{
      this.itemsSet.add(item);
    }
    this.items = Array.from(this.itemsSet.values());
    this.updateTotal();
  }

  updateTotal(){
    this.total = this.items.length === 0 ? 0 :
      this.items.map(item => item.subtotal)
        .reduce((total, subtotal) => total + subtotal);
  }

}
