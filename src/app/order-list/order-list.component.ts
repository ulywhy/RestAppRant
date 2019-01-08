import { Component, OnInit, Input } from '@angular/core';
import { FoodSelectComponent } from '../food-select/food-select.component';
import { PaymentDialogComponent } from '../payment-dialog/payment-dialog.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { OrderService } from '../order.service';
import { Order } from '../order';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {SelectionModel} from '@angular/cdk/collections';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class OrderListComponent implements OnInit {

  @Input() paid : boolean = null;
  orders: Order[];
  expandedOrder: Order | null;
  selection = new SelectionModel<Order>(true, []);

  itemColumnsToDisplay = ['quantity', 'food', 'subtotal'];
  columnsToDisplay = this.paid ? ['number', 'total'] : ['select', 'number', 'total'];

  constructor(
    private orderService : OrderService,
    public paymentDialog: MatDialog) {
  }


  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.orders.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.orders.forEach(row => this.selection.select(row));
  }

  ngOnInit() {
    this.getOrders();
    this.columnsToDisplay = this.paid ? ['number', 'total'] : ['select', 'number', 'total'];
  }

  getOrders(){
    let query:any = {};

    if(this.paid !== null) query.paid = this.paid;

    this.orderService.getOrders(query)
    .subscribe(orders => {
      this.orders = orders;
      console.log(this.orders);
    });
  }

  onCheckout(){
    let ordersToPay = this.selection.selected;
    console.log(ordersToPay)
    this.openDialog(ordersToPay);
  }

  onDelete(){
    this.selection.selected.forEach(order => {
      this.orderService.delete(order).subscribe(
        res => {
          //show warning message(ask if really wants to delete order)
          this.getOrders();
        },
        err => {
          console.log(err);
        }
      )}
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
        console.log(result);
        result.forEach(order => this.updateOrder(order));
      }
    });
  }
}
