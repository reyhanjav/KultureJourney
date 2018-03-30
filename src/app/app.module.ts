import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import {AngularFireModule} from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AuthService } from '../services/auth.service';

import { DiscoveryPage } from '../pages/discovery/discovery';
import { DiscoveryReadPage } from '../pages/discovery-read/discovery-read';

import { BookmarkPage } from '../pages/bookmark/bookmark';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


export const firebaseConfig = {
  apiKey: "AIzaSyDWt4eCzFBQiCvVl0r9iBjYF4VrYatStzY",
  authDomain: "kulture-journey.firebaseapp.com",
  databaseURL: "https://kulture-journey.firebaseio.com",
  projectId: "kulture-journey",
  storageBucket: "kulture-journey.appspot.com",
  messagingSenderId: "413081514719"
};

@NgModule({
  declarations: [
    MyApp,
    DiscoveryPage,
    DiscoveryReadPage,
    BookmarkPage,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    DiscoveryPage,
    DiscoveryReadPage,
    BookmarkPage,
    HomePage,
    ProfilePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    AngularFireAuth,
    AuthService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
