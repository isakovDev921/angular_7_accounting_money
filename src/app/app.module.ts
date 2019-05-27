import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { OrderListModule } from 'primeng/orderlist';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RadioButtonModule } from 'primeng/radiobutton';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   
    AuthModule,
    AppRoutingModule  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
