import { Component, OnInit } from '@angular/core';
import { UserService } from '../../user.service'

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {
  current_user;
  usersBikes = [];
  constructor(private _userservice: UserService) { }

  ngOnInit() {
    this._userservice.getLoggedUser();
    this._userservice.getCurrentUser().subscribe(
      res => {
        if(res){
          this.current_user = res;
          if(this.current_user){
          console.log("Did we get a current user?", this.current_user);
          for(let i=0; i < this.current_user.bikes.length; i++){
            console.log("Got bike",this.current_user.bikes[i].title);
            this.usersBikes.push(this.current_user.bikes[i]);
          }
        }
        }
      }
    );
  }

}
