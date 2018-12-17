import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private _http: HttpClient) { }

  getPlayers(){
    return this._http.get('/players/list');
  }
  createPlayer(player){
    return this._http.post('/players/addplayer', player);
  }
  getOne(id){
    return this._http.get(`players/list/${id}`);
  }

  updateOne(id, player){
    return this._http.put(`/players/list/${id}`, player);
  }

  deleteOne(id){
    return this._http.delete(`/players/list/${id}`);
  }
}