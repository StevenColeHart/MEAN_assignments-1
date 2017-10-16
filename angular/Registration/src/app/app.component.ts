import { Component } from '@angular/core';
import { User } from './user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Registration';
  users = [];
  user = new User();

  onSubmit(){
    console.log("onSubmit()");
    console.log(this.user);
    this.users.push(this.user);
    this.user = new User();
  }
}