import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class GhapiService {
  constructor(private _http: Http) { }
  score = 0;

  getUser(username, callback){
    this._http.get("https://api.github.com/users/" + username).subscribe(
      (response) => {
      this.score = response.json().public_repos + response.json().followers,
      callback(this.score)
    },
      (error) => {console.log(error),
      this.score =-1,
      callback(this.score)
      }
  )}
}
