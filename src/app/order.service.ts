import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Order } from './order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  orderUrl = 'http://192.168.1.68:5656/rest/order';

  constructor(
    private http : HttpClient) {

  }

  getOrders(){
    return this.http.get<Order[]>(this.orderUrl);
  }
}
