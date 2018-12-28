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

  foodUrl = 'https://rest-app-rant-client.herokuapp.com/rest/food';
  //foodUrl = 'http://192.168.1.68:5656/rest/food';

  constructor(
  private http: HttpClient) {
    console.log(this.foodUrl)
  }

  getFoods(){
    return this.http.get<Food[]>(this.foodUrl);
  }

  saveFood(food:Food){
    console.log("sending post");
    console.log(food);
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
