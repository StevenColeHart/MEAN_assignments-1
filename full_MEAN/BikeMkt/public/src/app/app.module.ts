import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRegComponent } from './login-reg/login-reg.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BikeOtdComponent } from './login-reg/bike-otd/bike-otd.component';
import { LoginComponent } from './login-reg/login/login.component';
import { RegisterComponent } from './login-reg/register/register.component';
import { BrowseComponent } from './dashboard/browse/browse.component';
import { MyListComponent } from './dashboard/my-list/my-list.component';
import { SearchComponent } from './dashboard/browse/search/search.component';
import { DisplayAllComponent } from './dashboard/browse/display-all/display-all.component';
import { CreateComponent } from './dashboard/my-list/create/create.component';
import { EditComponent } from './dashboard/my-list/edit/edit.component';

import { UserService } from './user.service'
import { BikeService } from './bike.service'

@NgModule({
  declarations: [
    AppComponent,
    LoginRegComponent,
    DashboardComponent,
    BikeOtdComponent,
    LoginComponent,
    RegisterComponent,
    BrowseComponent,
    MyListComponent,
    SearchComponent,
    DisplayAllComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    BikeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
