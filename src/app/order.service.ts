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

  //orderUrl = 'https://rest-app-rant-server.herokuapp.com/rest/order';
  orderUrl = 'http://192.168.1.68:5656/rest/order';

  constructor(
    private http : HttpClient) {
  }

  getOrders(){
    return this.http.get<Order[]>(this.orderUrl);
  }

  saveOrder(order: Order){
    console.log(order);
    this.http.post(this.orderUrl, {
      order: {
        number: order.number,
        total: order.total,
        items: Array.from(order.items.values())
      }}, httpOptions).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
    );
  }

}
