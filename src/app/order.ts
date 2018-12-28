import { Item } from './item';

export class Order {

  _id: any;
  number: number;
  private _total: number;
  items: Set<Item>;
  status: string;
  date: any;

  constructor(){
    this.number = 0;
    this.items = new Set<Item>([]);
  }

  addItem(item: Item){
    if(item.count === 0){
      this.items.delete(item);
    }else{
      this.items.add(item);
    }
  }

  get total(): number{
    let its = Array.from(this.items);
    if(its.length == 0){
       return 0;
    }else{
      return its.map(it => it.subtotal)
        .reduce((total, subtotal) => total + subtotal);
    }
  }

}
