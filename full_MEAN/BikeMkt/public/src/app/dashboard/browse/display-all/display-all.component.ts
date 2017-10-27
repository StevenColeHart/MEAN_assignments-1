import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router'
import { BikeService } from '../../../bike.service'
import { UserService } from '../../../user.service'

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent implements OnInit {

  constructor(private _http: Http, 
    private _bikeservice: BikeService, 
    private _router: Router,
    private _userservice: UserService) { }

  bikes = [];
  errors = [];


  ngOnInit() {
    this._bikeservice.ShowAllBikes().subscribe(
      (data) => {
        if(data.errors == "None"){
        this.bikes = data.bikes;
        this._router.navigateByUrl('/dashboard/browse');
        }
        else{
          this.errors = data.errors;
          console.log("this.errors: ", this.errors);
       }
      },
      (err) => {
        console.log("err", err);
      }
    );
  }
}
