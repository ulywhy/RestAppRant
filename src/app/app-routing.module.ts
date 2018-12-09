import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodListComponent } from './food-list/food-list.component';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'food/add', component: FoodFormComponent },
  { path: 'food', component: FoodListComponent },
  { path: 'order', component: OrderDisplayComponent },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }