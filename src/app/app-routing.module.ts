import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodFormComponent } from './food-form/food-form.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { FoodSelectComponent } from './food-select/food-select.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'food/add', component: FoodFormComponent },
  { path: 'food', component: FoodListComponent },
  { path: 'order', component: OrderManagerComponent },
  { path: 'order/new', component: FoodSelectComponent },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
