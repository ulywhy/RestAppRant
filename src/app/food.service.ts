import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Food } from './food';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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

  saveFood(food:Food){
    console.log("sending post");
    this.http.post(this.foodUrl, food, httpOptions).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
    );
  }
}
