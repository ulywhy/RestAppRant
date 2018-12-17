import { Component, OnInit, Inject } from '@angular/core';
import {NgForm} from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Item } from '../item';

@Component({
  selector: 'app-food-display',
  templateUrl: './food-display.component.html',
  styleUrls: ['./food-display.component.css']
})
export class FoodDisplayComponent implements OnInit {




  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Item,
    public dialogRef: MatDialogRef<FoodDisplayComponent>) {}



  ngOnInit() {
  }

  updateItem(){
    this.data.updateSubtotal();
  }


  submitItem(event) {
    if(event.keyCode == 13) {
      this.closeDialog();
    }
  }

  closeDialog(): void{
    this.dialogRef.close(this.data);
  }



}
