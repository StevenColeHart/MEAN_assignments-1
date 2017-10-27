import { Component, OnInit, Input } from '@angular/core';
import { UserService } from "../user.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  current_user;
  constructor(private _userservice: UserService) { }
  
  ngOnInit() {
   //console.log("What is getCurrentUser?", this._userservice.getCurrentUser());
    this._userservice.getCurrentUser().subscribe(
      res => {this.current_user = res;});
  }


}
