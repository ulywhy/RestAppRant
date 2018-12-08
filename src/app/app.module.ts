import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* FORM IMPORTS */
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {TextFieldModule} from '@angular/cdk/text-field';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodListComponent } from './food-list/food-list.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { FoodDisplayComponent } from './food-display/food-display.component';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent,
    FoodListComponent,
    FoodDisplayComponent
  ],
  imports: [
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
