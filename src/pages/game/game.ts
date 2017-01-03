import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {
  numb:number = 0;
  numberOfPlayers: Array<number> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numb = navParams.get('number')
  }

  ionViewDidLoad() {
    for(let i = 0; i < this.numb; i++){
      this.numberOfPlayers.push(i);
    }
  }

}
