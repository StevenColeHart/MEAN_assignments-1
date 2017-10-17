import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numArr(){
    var numArr = [];
    for(let i=1;i<101;i++){
      numArr[i - 1] = i;
    }
    return numArr;
  }

  powerTxt(myPower){
    if(myPower > 9000 && myPower <= 20000){
      return "It's over 9000!";
    }
    else if(myPower > 20000 && myPower < 50000){
      return "Superlative power!"
    }
    else if(myPower >= 50000){
      return "The Chosen One!"
    }
    else{
      return "";
    }
  }

  power = {lvl: 1}
  submitted = false;
  types = ["Human", "Saiyan", "Super Saiyan", "Super Duper Saiyan", "Triple Super Saiyan", "Quadruple Super Saiyan"]

  onSubmit(){
    console.log("something");
    console.log(this.power.lvl);
    this.submitted = true;
  }
}
