import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Quote Ranks';
  quotes = [];
  quote = new Quote();

  onSubmit(){
    console.log("Submitting quote...");
    this.quotes.push(this.quote);
    console.log(this.quotes);
    this.quote = new Quote();
  }
}