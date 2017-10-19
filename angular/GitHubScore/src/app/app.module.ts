import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { GhapiService } from './ghapi.service';
import { GetScoreComponent } from './get-score/get-score.component';

@NgModule({
  declarations: [
  AppComponent,
  GetScoreComponent
  ],
  imports: [
  BrowserModule,
  FormsModule,
  HttpModule
  ],
  providers: [GhapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }