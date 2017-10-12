import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Retro Barcode';
  shuffleColors(){
  	// this is the Fisher-Yates (aka Knuth) shuffle:
  	// http://sedition.com/perl/javascript-fy.html
  	var colorArr: string[] = ['MediumSlateBlue', 'ForestGreen', 'OrangeRed', 'LightSeaGreen', 'CornflowerBlue', 'Crimson'];
  	var i: number = colorArr.length;
  	//while-loop counts down from i to 0, exclusive
  	while(--i){
  		//Get a random number between 0 and i - 1
  		var j = Math.floor(Math.random() * (i + 1));
  		//get elements at two indices, one pre-determined by countdown, one random
  		var tempi = colorArr[i];
  		var tempj = colorArr[j];
  		// swap them: this may mean -- will probably guarantee -- multiple swaps,
  		// but that's OK! We just want to stir the array up.
  		colorArr[j] = tempi;
  		colorArr[i] = tempj;
  		// Q to ponder: how does this guarantee that no color is lost?
  		// A: Because each swap is a SWAP -- it saves BOTH colors
  		//    before overwriting them. How could anything be lost
  		//    if everything is saved?
  	}
  	return colorArr;
  }
}
