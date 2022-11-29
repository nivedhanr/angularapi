import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PassangerviewComponent } from './passangerview/passangerview.component';
import { UpublicdataComponent } from './upublicdata/upublicdata.component';
import { PublicapiComponent } from './publicapi/publicapi.component';
import { ProductComponent } from './product/product.component';
import { UserdataComponent } from './userdata/userdata.component';
import { TodoComponent } from './todo/todo.component';
import { QuotesappComponent } from './quotesapp/quotesapp.component';
import { NavComponent } from './nav/nav.component';
import { RouterModule, Routes } from '@angular/router';
import {HttpClientModule} from '@angular/common/http';

const myRoute: Routes=[
  {
    path:"",
    component:PassangerviewComponent
  },
  {
    path:"public",
    component:PublicapiComponent
  },
  {
    path:"user",
    component:UserdataComponent
  },
  {
    path:"todo",
    component:TodoComponent
  },
  {
    path:"quotes",
    component:QuotesappComponent
  },
  {
    path:"product",
    component:ProductComponent
  },
  {
    path:"uspublic",
    component:UpublicdataComponent
  },
  
]
@NgModule({
  declarations: [
    AppComponent,
    PassangerviewComponent,
    UpublicdataComponent,
    PublicapiComponent,
    ProductComponent,
    UserdataComponent,
    TodoComponent,
    QuotesappComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(myRoute),
    HttpClientModule


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
