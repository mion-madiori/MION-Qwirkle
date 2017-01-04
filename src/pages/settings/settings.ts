import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Dialogs } from 'ionic-native';

import {PlayerEntity} from '../../entities/PlayerEntity'
import { DbService } from '../../providers/db-service'

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  player:any = {
    name: null
  }

  constructor(
    public dbService: DbService,
    public playerEntity:PlayerEntity
    ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  savePlayer():void{
    
  }

  testCrea(){
    
  }

  ifError(message){
    Dialogs.alert(message, 'Erreur', 'OK');
  }
}
