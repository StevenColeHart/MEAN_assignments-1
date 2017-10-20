import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component'
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { WeatherServiceService } from './weather-service.service';
import { PictureService } from './picture.service';

@NgModule({
  declarations: [
  AppComponent,
  WeatherComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  AppRoutingModule
  ],
  providers: [WeatherServiceService, PictureService],
  bootstrap: [AppComponent]
})
export class AppModule { }