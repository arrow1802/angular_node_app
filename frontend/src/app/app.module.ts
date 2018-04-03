import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { 
  MatButtonModule,
  MatCardModule ,
  MatInputModule,
  MatSnackBarModule,
  MatToolbarModule
} from '@angular/material';
import { HttpModule} from '@angular/http';  
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './messages/messages.services';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
