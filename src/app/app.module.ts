import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ListingComponent } from './components/listing/listing.component';
import { CartComponent } from './components/cart/cart.component';
import { LineitemsComponent } from './components/lineitems/lineitems.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListingComponent,
    CartComponent,
    LineitemsComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
