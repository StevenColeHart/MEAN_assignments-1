import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _userservice: UserService, private _router: Router) { }

  user = {email: "", password: ""};
  errors = "";
  ngOnInit() {
  }
  onSubmit(){
    //console.log(this.user);
    this._userservice.LogInUser(this.user).subscribe(
      (res) => {
        if(res.json().errors == "None"){
        this._userservice.current_user.next(res.json().user);
        this._router.navigateByUrl('/dashboard/browse');
        }
        else{
          this.errors = res.json().errors;
          console.log("this.errors: ", this.errors);
        }
      },
      (err) => {
        console.log("err", err);
      }
    );
    this.user = {email: "", password: ""};
  }
}
