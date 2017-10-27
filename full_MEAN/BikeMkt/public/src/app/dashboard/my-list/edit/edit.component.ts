import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../../user.service';
import { BikeService } from '../../../bike.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() bike;
  current_user;
  constructor(private _userservice: UserService, private _bikeservice: BikeService, private _router: Router) { }

  ngOnInit() {
    console.log(this.bike);
    
  }

  // ngOnChanges(changes: SimpleChanges){
  //   this.bike = changes.bike.currentValue;
  // }

  onSubmit(){
    console.log("Submitting this bike", this.bike);
    this._bikeservice.UpdateBike(this.bike);
    this._router.navigateByUrl('/dashboard/my-list');
  }

  deleteButton(){
    console.log("deleteButton function in component");
    this._bikeservice.DeleteBike(this.bike._id);
    this._router.navigateByUrl('/dashboard/my-list');
  }

}
