import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { FileOpener } from '@ionic-native/file-opener';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { Ng2OrderModule } from 'ng2-order-pipe';
import { IonicAudioModule, AudioProvider, WebAudioProvider, defaultAudioProviderFactory } from 'ionic-audio';


import { RecordPage } from '../pages/record/record';
import { SongsPage } from '../pages/songs/songs';
import { ChordsPage } from '../pages/chords/chords';
import { PopoverPage } from '../pages/chords/chords';
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
    PopoverPage,
    ChordsDisplayPage,
    TabsPage,
    AddSong
  ],
  imports: [
    BrowserModule,
    Ng2OrderModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicAudioModule.forRoot(defaultAudioProviderFactory)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RecordPage,
    SongsPage,
    PopoverPage,
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
