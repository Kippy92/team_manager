import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['../bootstrap.css']
})
export class AddComponent implements OnInit {
  player = {
    "name": '',
    "position": '',
  }
  errors = {};
  constructor(private _teamService: TeamService, private _router: Router) { }

  ngOnInit() {
  }
  create(){
    let observable = this._teamService.createPlayer(this.player);
    observable.subscribe(data => {
      console.log(data);
      if (data['status']== 'not ok'){
        this.errors = data['errors']['errors'];
      } 
      else {
        this._router.navigate(['/']);
      }
    });
  }

}
