import { Component, OnInit, Input } from '@angular/core';
import { FoodSelectComponent } from '../food-select/food-select.component';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
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
    private orderService : OrderService,
    public paymentDialog: MatDialog) {
  }



  ngOnInit() {
    this.getOrders();
  }

  getOrders(){
    let query:any = {};

    if(this.served !== null) query.served = this.served;
    if(this.paid !== null) query.paid = this.paid;

    this.orderService.getOrders(query)
    .subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  onCheckout(order : Order){
    this.openDialog(order);
  }

  onServed(order : Order){
    order.served = true;
    this.updateOrder(order);
  }

  onDelete(order : Order){
    this.orderService.delete(order).subscribe(
      res => {
        //show warning message(ask if really wants to delete order)
        this.getOrders();
      },
      err => {
        console.log(err);
      }
    );
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

  openDialog(order : Order) {

    const dialogRef = this.paymentDialog.open(PaymentDialogComponent, {
      width: '100vw',
      data: order,
      disableClose : true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        order.paid = true;
        console.log(result);
        this.updateOrder(order);
        console.log(order);
      }
    });
  }
}
