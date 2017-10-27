import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';
//import { User } from '../../user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userservice: UserService, private _router: Router) { }
  user = {first_name: "", last_name: "", email: "", password: ""};
  ngOnInit() {

  }

  onSubmit(){
    console.log(this.user);
    this._userservice.CreateUser(this.user).subscribe(
      (response) => {
        console.log("Successful response from server:", response);
      },
      (err) => {
        console.log("Errors: ", err);
      }
    )
    this.user = {first_name: "", last_name: "", email: "", password: ""};
    this._router.navigate(['dashboard']);
  }
}
