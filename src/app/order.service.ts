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

  //orderUrl = 'https://rest-app-rant-client.herokuapp.com/rest/order';
  orderUrl = 'http://192.168.1.68:5656/rest/order';

  constructor(
    private http : HttpClient) {
  }

  getOrders(query : any){
    return this.http.get<Order[]>(this.orderUrl, {
      'params' : query
    });
  }

  saveOrder(order: Order){
    console.log(order)
    return this.http.post(this.orderUrl, order, httpOptions);
  }

  orderUpdate(order : Order){
    console.log("updating order");
    console.log(order);
    return this.http.put(this.orderUrl, {
      order: {
        _id: order._id,
        paid: order.paid,
        served: order.served,
        number: order.number,
        total: order.total,
        items: Array.from(order.items.values())
      }
    }, httpOptions);
  }

}
