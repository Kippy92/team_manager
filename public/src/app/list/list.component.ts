import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['../bootstrap.css']
})
export class ListComponent implements OnInit {
players = [];
  constructor(private _teamservice: TeamService, private _router: Router, private _route: ActivatedRoute) { }

  ngOnInit() {
    this.getAllPlayers();
  }

  getAllPlayers(){
    let observable = this._teamservice.getPlayers();
    observable.subscribe( data => {
      this.players = data['players'];
      console.log(data);
    });

  }

  delete(id){
    let observable = this._teamservice.deleteOne(id);
    observable.subscribe( data => {
        this.getAllPlayers();
    })
  }

}