import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Switchboard';
  switchboard = {};
  
  ngOnInit(){
    var onoff = ['on', 'off'];
    for(let i=0; i<10; i++){
      this.switchboard[i] = onoff[Math.floor(Math.random() * 2)];
    }
  }

  clickSwitch(which){
    if(this.switchboard[which] == 'on'){
      this.switchboard[which] = 'off';
    }
    else{
      this.switchboard[which] = 'on';
    }
  }
}
