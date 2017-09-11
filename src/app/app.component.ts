import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';

import firebase from 'firebase';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      var firebaseConfig = {
        apiKey: "AIzaSyB9h85e90s-UH99y4EFjlFBI2IAQfgDejk",
        authDomain: "frhosting-babe8.firebaseapp.com",
        databaseURL: "https://frhosting-babe8.firebaseio.com",
        projectId: "frhosting-babe8",
        storageBucket: "frhosting-babe8.appspot.com",
        messagingSenderId: "215139149062"
      };
      
      firebase.initializeApp(firebaseConfig);
    });
  }
}

