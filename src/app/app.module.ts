import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { GamePage } from '../pages/game/game';
import { SettingsPage } from '../pages/settings/settings';

import { PlayerComponent } from '../components/player/player';

import { DbService } from '../providers/db-service';
import {PlayerEntity} from '../entities/PlayerEntity'

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    GamePage,
    SettingsPage,
    
    PlayerComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    GamePage,
    SettingsPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DbService,
    PlayerEntity
  ]
})
export class AppModule {}
