import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodFormComponent } from './food-form/food-form.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { OrderCreateComponent } from './order-create/order-create.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'food/add', component: FoodFormComponent },
  { path: 'order', component: OrderManagerComponent },
  { path: 'order/new', component: OrderCreateComponent },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
