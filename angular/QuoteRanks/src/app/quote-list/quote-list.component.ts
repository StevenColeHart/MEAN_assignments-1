import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {
  @Input() quotes;

  voteUp(quote){
    quote.score++;
  }

  voteDown(quote){
    quote.score--;
  }

  delete(quote){
    this.quotes.splice(this.quotes.indexOf(quote), 1);
    console.log(this.quotes);
  }
  constructor() { }

  ngOnInit() {
  }

}
