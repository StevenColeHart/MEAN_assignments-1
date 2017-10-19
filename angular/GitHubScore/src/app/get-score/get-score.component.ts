import { Component, OnInit } from '@angular/core';
import { GhapiService } from '../ghapi.service';

@Component({
  selector: 'app-get-score',
  templateUrl: './get-score.component.html',
  styleUrls: ['./get-score.component.css']
})
export class GetScoreComponent implements OnInit {
  score = 0;
  user = {username: ""};
  current_user = "";
  commentary = {text: "", color: ""}

  constructor(private _ghapiservice: GhapiService) {}

  onSubmit(){
    this._ghapiservice.getUser(this.user.username, (score)=>{this.score = score;});
    this.current_user = this.user.username;
    this.commentary = this.getCommentary(this.score);
  }

  getCommentary(score){
    var c = {text: '', color: ''};
    if(score < 20){
      c.text = "Needs work!";
      c.color = "red";
    }
    else if(score > 20 && score < 50){
      c.text = "A decent start!";
      c.color = "orange";
    }
    else if(score > 50 && score < 100){
      c.text = "Doing good!";
      c.color = "black";
    }
    else if(score > 100 && score < 200){
      c.text = "Great job!";
      c.color = "green";
    }
    else{
      c.text = "GitHub elite!";
      c.color = "blue"
    }
    return c;
  }

  ngOnInit() {
  }

}
