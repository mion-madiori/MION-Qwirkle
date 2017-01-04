import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { HomePage } from '../pages/home/home';
import { DbService } from '../providers/db-service';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(
    public platform: Platform,
    public dbService:DbService
    ) {
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    /*  dbService.openDb()
        .then(()=> this.dbService.createTable())
        .then(()=>{
          console.log('createTable ok')
        })*/
    });
  }
}
