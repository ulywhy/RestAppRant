import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router } from '@angular/router';
import {MatTable} from '@angular/material';
import { FoodDisplayComponent } from '../food-display/food-display.component';
import { OrderService } from '../order.service';
import { FoodService } from '../food.service';
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
  items: Item[];
  data : Item[];

  //table
  @ViewChild(MatTable) table: MatTable<any>;
  columnsToDisplay = ['count', 'name', 'subtotal'];

  constructor(
    private orderService: OrderService,
    private foodService: FoodService,
    public dialog: MatDialog,
    private router : Router) {
      this._order = new Order();
  }

  ngOnInit() {
    this.getFoods();
  }

  get order(){
    return this._order
  }

  getFoods(){
    this.foodService.getFoods().subscribe(foods => {
      this.items = foods.map(food => new Item(food));
    });
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
    this.orderService.saveOrder(this._order).subscribe(data => {
      this.router.navigate(['/order']);
    });

  }
}
