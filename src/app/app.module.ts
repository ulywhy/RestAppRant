import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
/* FORM IMPORTS */
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import {TextFieldModule} from '@angular/cdk/text-field';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FoodFormComponent } from './food-form/food-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent
  ],
  imports: [
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
