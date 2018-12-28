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

  @Input() status: string;
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
    this.orderService.getOrders(this.status)
    .subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  checkout(order : Order){
    order.status = "paid";
    this.orders.splice(this.orders.indexOf(order), 1);
    this.orderService.orderUpdate(order);
  }

  served(order : Order){
    order.status = "served";
    this.orders.splice(this.orders.indexOf(order), 1);
    this.orderService.orderUpdate(order);
  }

}
