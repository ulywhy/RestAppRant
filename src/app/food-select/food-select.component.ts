import { Component, OnInit, ViewChild, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {MatTable} from '@angular/material';
import { FoodDisplayComponent } from '../food-display/food-display.component';
import { OrderService } from '../order.service';
import { Order } from '../order';
import { Item } from '../item';

@Component({
  selector: 'app-food-select',
  templateUrl: './food-select.component.html',
  styleUrls: ['./food-select.component.css']
})
export class FoodSelectComponent implements OnInit {

  _order : Order;
  currentItem: Item;
  selectedItems : Item[];
  @Input() items: Item[];
  data : Item[];

  //table
  @ViewChild(MatTable) table: MatTable<any>;
  columnsToDisplay = ['count', 'name', 'subtotal'];

  constructor(
    private orderService: OrderService,
    public dialog: MatDialog) {
      this._order = new Order();
  }

  ngOnInit() {
  }

  get order(){
    return this._order
  }

  getTotalCost(): number{
    return this._order.total;
  }

  openDialog(selection: Item) {
    this.currentItem = selection;

    const dialogRef = this.dialog.open(FoodDisplayComponent, {
      width: '100vw',
      data: selection,
      disableClose : true,
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this._order.addItem(result);
        console.log(this._order.items);
      }
    });
  }

  saveOrder(){
    this.orderService.saveOrder(this._order);

  }
}
