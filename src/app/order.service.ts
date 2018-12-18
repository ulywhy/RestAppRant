import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Order } from './order';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class OrderService {

  orderUrl = 'https://rest-app-rant-server.herokuapp.com/rest/order';

  constructor(
    private http : HttpClient) {

  }

  getOrders(){
    return this.http.get<Order[]>(this.orderUrl);
  }

  saveOrder(order: Order){
    console.log("sending order post");
    this.http.post(this.orderUrl, order, httpOptions).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
    );
  }

}
