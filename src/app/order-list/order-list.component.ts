import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';
import { Order } from '../order';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

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
