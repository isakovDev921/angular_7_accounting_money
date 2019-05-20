import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { OrderListModule } from 'primeng/orderlist';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AuthModule } from './auth/auth.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    OrderListModule,
    ButtonModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
