import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/* FORM IMPORTS */
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';

/* routing */
import { AppRoutingModule } from './app-routing.module';

/* async http */
import { HttpClientModule }    from '@angular/common/http';
/* material animation */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* material modules */
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
/* Custom components */
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { OrderDisplayComponent } from './order-display/order-display.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent,
    FoodListComponent,
    FoodDisplayComponent,
    OrderDisplayComponent
  ],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    HttpClientModule,
    ReactiveFormsModule,
    TextFieldModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
