import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class BikeService {

  constructor(private _http: Http) { }

  CreateBike(bike){
    return this._http.post('/createBike', bike);
  };

  ShowOneBike(id){
    return this._http.get("/showOneBike/" + id);
  };

  ShowAllBikes(){
    return this._http.get('/showAllBikes').map((response) => response.json());
  };

  UpdateBike(bike){
    console.log("update function in the service, with this bike:", bike.title);
    return this._http.post('/updateBike', bike).subscribe(res=>{console.log("Something")}, err=>{console.log("errors:", err)});
  };

  DeleteBike(id){
    console.log("Delete function in service, deleting id:", id);
    return this._http.delete('/deleteBike/' + id).subscribe(res=>{"Response in service..."}, err=>{console.log("services error:", err)});
  }



}
