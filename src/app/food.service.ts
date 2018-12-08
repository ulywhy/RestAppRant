import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Food } from './food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  serverIp = '192.168.1.68';
  serverPort = '5656';
  foodUrl = 'http://' + this.serverIp + ':' + this.serverPort + '/rest/food';

  constructor(
  private http: HttpClient) {
  }

  getFoods(){
    return this.http.get<Food[]>(this.foodUrl);
  }
}
