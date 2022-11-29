import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassangerviewComponent } from './passangerview/passangerview.component';
import { UpublicdataComponent } from './upublicdata/upublicdata.component';
import { PublicapiComponent } from './publicapi/publicapi.component';
import { ProductComponent } from './product/product.component';

@NgModule({
  declarations: [
    AppComponent,
    PassangerviewComponent,
    UpublicdataComponent,
    PublicapiComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
