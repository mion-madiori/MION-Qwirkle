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
    
    try {
      this._dataBase.openDatabase({
        name: 'qwirkle.db',
        location: 'default'
      }).then((db:SQLite) =>{
        db
          .executeSql(this._createQuery, {})
          .then(()=>{
            this._ifError('ça marche', 'Création de la base de donnée ok')
          }, err=>{
            this._ifError('ça marche', `Problème lors de l'execution de la requête: ${err}`);
          })
        }, err=>{
          this._ifError('Erreur', `Problème à l'ouverture de la base de données: ${err}`)
      });
    } catch (error) {
      this._ifError('Erreur', error)
    }
  }

  testCrea(){
    this._dataBase = new SQLite();
    this._ifError('info', 'test1')
    try {
      this._dataBase.openDatabase({
        name: 'qwirkle.db',
        location: 'default'
      }).then((db:SQLite) =>{
        db
          .executeSql(this._createQuery, {})
          .then(()=>{
            this._ifError('ça marche', 'Création de la base de donnée ok')
          }, err=>{
            this._ifError('ça marche', `Problème lors de l'execution de la requête: ${err}`);
          })
        }, err=>{
          this._ifError('Erreur', `Problème à l'ouverture de la base de données: ${err}`)
      });
    } catch (error) {
      this._ifError('Erreur', error)
    }


    this._ifError('info', 'test2')
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
