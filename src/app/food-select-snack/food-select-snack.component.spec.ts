import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSelectSnackComponent } from './food-select-snack.component';

describe('FoodSelectSnackComponent', () => {
  let component: FoodSelectSnackComponent;
  let fixture: ComponentFixture<FoodSelectSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSelectSnackComponent ]
    })
    .compileComponents();
  }));

  befoimport { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-food-select-snack',
  templateUrl: './food-select-snack.component.html',
  styleUrls: ['./food-select-snack.component.css']
})
export class FoodSelectSnackComponent implements OnInit {

  constructor() {

  }

  ngOnInit() {

  }

}
reEach(() => {
    fixture = TestBed.createComponent(FoodSelectSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
