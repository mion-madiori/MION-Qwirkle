import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { GamePage } from '../game/game';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  players: Array<Object> = []
  choice:number = 0

  constructor(public navCtrl: NavController) {
    this.players = [
      {name: 2, checked: true},
      {name: 3, checked: false},
      {name: 4, checked: false},
    ]
  }

  validate():void{
    console.log(this.choice)
    this.navCtrl.push(GamePage, {number: this.choice})
  }

}
