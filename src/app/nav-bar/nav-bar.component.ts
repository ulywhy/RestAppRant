import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  title = 'FoodApp';

  constructor(private location: Location) {
  }

  ngOnInit() {
  }


  goBack(): void {
    this.location.back();
  }
}
