import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BikeService } from '../../../bike.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private _bikeservice: BikeService, private _router: Router) { }

  bike = {title: "", description: "", price: 1, imgUrl: "", location: "", user_id: ""}

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.bike);
    this._bikeservice.CreateBike(this.bike).subscribe(
      (response) => {
        console.log("Successful response from server:", response);
      },
      (err) => {
        console.log("Errors: ", err);
      }
    )
    this.bike = {title: "", description: "", price: 1, imgUrl: "", location: "", user_id: ""}
    this._router.navigate(['dashboard/my-list']);
  }
}

