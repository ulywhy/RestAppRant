import { Component, OnInit } from '@angular/core';
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
    this.orderService.getOrders()
    .subscribe(orders => {
      this.orders = orders;
    });
  }

}
