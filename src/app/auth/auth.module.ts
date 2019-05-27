import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';

import { ButtonModule } from 'primeng/button';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { SharedModule } from '../shared/shared.module';

@NgModule({
 declarations: [
     LoginComponent,
     RegistrationComponent,
     AuthComponent
    ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        RadioButtonModule,
        ButtonModule,
        BrowserModule,
        InputTextModule,
        SharedModule
    ]
})

export class AuthModule {   
}