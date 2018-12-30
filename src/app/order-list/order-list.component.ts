import { Component, OnInit, Input } from '@angular/core';
import { FoodSelectComponent } from '../food-select/food-select.component';
import { FoodDisplayComponent } from '../food-display/food-display.component';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})

export class OrderListComponent implements OnInit {

  @Input() served : boolean = null;
  @Input() paid : boolean = null;
  newOrder: Order;
  orders: Order[];

  columnsToDisplay = ['quantity', 'food', 'subtotal'];

  constructor(
    private orderService : OrderService) {
  }



  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    let query = {};

    if(this.served !== null) query.served = this.served;
    if(this.paid !== null) query.paid = this.paid;

    this.orderService.getOrders(query)
    .subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  onCheckout(order : Order){
    order.paid = true;
    this.updateOrder(order);
  }

  onServed(order : Order){
    order.served = true;
    this.updateOrder(order);
  }

  updateOrder(order : Order){
    this.orderService.orderUpdate(order).subscribe(
      res => {
        this.getOrders();
      },
      err => {
        console.log(err);
      }
    );
  }

}
