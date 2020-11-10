import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { NavComponent } from './nav/nav.component';
import { AccountService } from './_services/account.service';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { SharedModule } from './_modules/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    NavComponent,
    HomeComponent,
      RegisterComponent,
      ListsComponent,
      MessagesComponent
   ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    AccountService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
