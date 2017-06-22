import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { MyApp } from './app.component';

import { Ng2OrderModule } from 'ng2-order-pipe';

import { RecordPage } from '../pages/record/record';
import { SongsPage } from '../pages/songs/songs';
import { ChordsPage } from '../pages/chords/chords';
import { ChordsDisplayPage } from '../pages/chords_display/chords_display';
import { AddSong } from '../pages/addSong/addSong';
import { TabsPage } from '../pages/tabs/tabs';

import { songListService } from '../services/songList.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    RecordPage,
    SongsPage,
    ChordsPage,
    ChordsDisplayPage,
    TabsPage,
    AddSong
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecordPage,
    SongsPage,
    ChordsPage,
    ChordsDisplayPage,
    TabsPage,
    AddSong
  ],
  providers: [
    StatusBar,
    SplashScreen,
    songListService,
    FileOpener,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
