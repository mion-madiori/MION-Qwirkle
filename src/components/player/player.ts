import { Component, Input } from '@angular/core';

@Component({
  selector: 'player',
  templateUrl: 'player.html'
})
export class PlayerComponent {

  @Input() uniqId:number;
  constructor() {}

}
