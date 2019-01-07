import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
/* FORM IMPORTS */
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import {TextFieldModule} from '@angular/cdk/text-field';

/* routing */
import { AppRoutingModule } from './app-routing.module';

/* async http */
import { HttpClientModule }    from '@angular/common/http';
/* material animation */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* icons */
import {MatIconModule} from '@angular/material/icon';
/* material modules */
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';

/* Custom components */
import { FoodFormComponent } from './food-form/food-form.component';
import { FoodDisplayComponent } from './food-display/food-display.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { OrderListComponent } from './order-list/order-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FoodSelectComponent } from './food-select/food-select.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
import { FoodListComponent } from './food-list/food-list.component';
import { PaymentDialogComponent } from './payment-dialog/payment-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    FoodFormComponent,
    FoodDisplayComponent,
    NavBarComponent,
    OrderListComponent,
    WelcomeComponent,
    FoodSelectComponent,
    OrderManagerComponent,
    FoodListComponent,
    PaymentDialogComponent,
  ],
  imports: [
    MatBadgeModule,
    MatTabsModule,
    FormsModule,
    MatDialogModule,
    MatSnackBarModule,
    MatBottomSheetModule,
    MatTableModule,
    MatListModule,
    MatExpansionModule,
    MatDividerModule,
    MatIconModule,
    MatMenuModule,
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
  entryComponents: [
    FoodDisplayComponent,
    PaymentDialogComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
