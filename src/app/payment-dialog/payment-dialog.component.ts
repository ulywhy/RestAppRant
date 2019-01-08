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
  amount : number;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Array<Order>,
    public dialogRef: MatDialogRef<PaymentDialogComponent>) {
      this.change = 0;
      this.ready = false;
      this.payment = 0;
      this.amount = data.map(order => order.total)
        .reduce((amount, total) => amount + total);

    }

  ngOnInit() {
  }

  updateChange(){
    if(this.payment >= this.amount){
      this.change = this.payment - this.amount;
      this.ready = true;
      this.data.forEach(order => order.paid = true);
    }else{
      this.ready = false;
      this.data.forEach(order => order.paid = false);
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
    this.dialogRef.close(this.data);
  }



}
