import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { SQLite, Dialogs } from 'ionic-native';

import {PlayerEntity} from '../entities/PlayerEntity'

@Injectable()
export class DbService {

  private _dataBase:SQLite
  private _createQuery = `
    CREATE TABLE IF NOT EXISTS players(
      ID INT PRIMARY KEY AUTOINCREMENT  NOT NULL,
      NAME            TEXT  NOT NULL
    )
  `
  constructor() {
    this._dataBase = new SQLite();
  }

  openDb(){
    return this._dataBase.openDatabase({
      name: 'qwirkle.db',
      loaction: 'default'
    });
  }

  createTable(){
    let sql = 'CREATE TABLE IF NOT EXISTS players (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)';
    return this._dataBase.executeSql(sql, []);
  }

  findAll():Array<PlayerEntity>{
    let players:Array<PlayerEntity>

    return players;
  }

  insert(player:PlayerEntity){
      let insertQuery = `
        INSERT INTO players (name)
        VALUES (${player.name})
      `
    try {
      this._dataBase.executeSql(insertQuery, {}).then(data=>{
        this._ifError('ça marche', 'Insertion: ' + JSON.stringify(data));
      }, error=>{
        this._ifError("Erreur d'insertion1: ", JSON.stringify(error))
      })

      alert("création d'un joueur")    
    } catch (error) {
      this._ifError("Erreur d'insertion2: ", error)
    }
  }

  private _ifError(title, message){
    Dialogs.alert(message, 'Erreur', 'OK');
  }

}
