export class Food {

  constructor(
    name: string,
    price: number,
    description: string){
      this.name = name;
      this._price = price;
      this.description = description;

  }

  name: string;
  _price: number;
  description: string;

  get price(): number{
    return this.price;
  }
}
