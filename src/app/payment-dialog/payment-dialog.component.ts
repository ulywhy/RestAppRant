import { Component, OnInit, Inject } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MatListModule} from '@angular/material/list';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Order } from '../order';

@Component({
  selector: 'app-payment-dialog',
  templateUrl: './payment-dialog.component.html',
  styleUrls: ['./payment-dialog.component.css']
})
export class PaymentDialogComponent implements OnInit {

  change : number;
  payment : number;
  ready : boolean;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Order,
    public dialogRef: MatDialogRef<PaymentDialogComponent>) {
      this.change = 0;
      this.ready = false;
      this.payment = 0;
    }

  ngOnInit() {
  }

  updateChange(){
    if(this.payment >= this.data.total){
      this.change = this.payment - this.data.total;
      this.ready = true;
    }else{
      this.ready = false;
    }
  }


  checkout(){
    this.closeDialog();
  }

  updatePayment(){
    this.updateChange();
  }


  submitPayment(event) {
    if(event.keyCode == 13) {
      this.closeDialog();
    }
  }

  closeDialog(): void{
    this.dialogRef.close(this.change);
  }



}
