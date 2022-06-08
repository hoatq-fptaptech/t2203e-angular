import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {ProductsComponent} from "./products/products.component";
import {ProductComponent} from "./product/product.component";

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ClassroomComponent,
    ProductsComponent,ProductComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
