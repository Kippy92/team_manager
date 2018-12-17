import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-game2',
  templateUrl: './game2.component.html',
  styleUrls: ['../bootstrap.css']
})
export class Game2Component implements OnInit {

  players = [];
  playing = { 
    games: {
      game2: "Playing"
  }};
  notplaying = {
    games: {
      game2: "Not Playing"
    }
  };
  undecided = {
    games: {
      game2: "Undecided"
    }
  };

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

  play(id){
    let observable = this._teamservice.updateOne(id, this.playing);
    observable.subscribe( data => {
      console.log(data);
      this.getAllPlayers();
    })
  }
  noplay(id){
    let observable = this._teamservice.updateOne(id, this.notplaying);
    observable.subscribe( data => {
      console.log(data);
      this.getAllPlayers();
    })
  }
  undecide(id){
    let observable = this._teamservice.updateOne(id, this.undecided);
    observable.subscribe( data => {
      console.log(data);
      this.getAllPlayers();
    })
  }   
}
