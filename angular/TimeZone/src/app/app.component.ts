import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'US Time Zone Display';
  zones = ["EST", "CST", "MST", "PST"];
  clicked = "";
  buttonClick(zone){
    //console.log(zone);
    this.clicked = zone;
  }

  setTime(){
    var time = new Date();
    if(this.clicked != ""){
      var time = new Date();
      time.setHours(time.getHours() - this.zones.indexOf(this.clicked));
    }
    console.log(time);
    return time;
  }
}
