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

  foodUrl = 'https://rest-app-rant-server.herokuapp.com/rest/food';
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

  foodUpdate(food : Food){
    console.log("updating food");
    console.log(food);
    return this.http.put(this.foodUrl, food, httpOptions);
  }

  delete(food : Food){
    console.log(food);
    return this.http.delete(this.foodUrl + '/' + food._id, httpOptions);
  }
}
