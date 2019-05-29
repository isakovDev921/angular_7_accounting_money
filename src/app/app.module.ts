import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { AccordionModule } from 'primeng/components/accordion/accordion';
import { OrderListModule } from 'primeng/orderlist';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RadioButtonModule } from 'primeng/radiobutton';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { InputTextModule } from 'primeng/inputtext';
import { UserService } from './shared/services/users';
import { AuthService } from './shared/services/auth.service';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,   
    AuthModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
