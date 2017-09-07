import { Component } from '@angular/core';
import { NavController , NavParams , AlertController } from 'ionic-angular';

import { AddSong } from '../addSong/addSong';

import { AudioProvider } from 'ionic-audio';


@Component({
  selector: 'chords_display',
  templateUrl: 'chords_display.html'
})

export class ChordsDisplayPage {
song;
  myTracks: any[];
  allTracks: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private _audioProvider: AudioProvider) {
    this.song = navParams.get("song");

    this.song.chords = this.song.chords.replace(/\n/g, "<br />");

    this.myTracks = [{
      src: 'bass.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    }];

  }

  editChords() {
      this.navCtrl.push(AddSong,{
      isEdit: true,
      song : this.song
    });

  }

 ngAfterContentInit() {     
    // get all tracks managed by AudioProvider so we can control playback via the API
    this.allTracks = this._audioProvider.tracks; 
  }
  
  playSelectedTrack() {
    // use AudioProvider to control selected track 
    this._audioProvider.play(this.myTracks[0]);
  }
  
  pauseSelectedTrack() {
     // use AudioProvider to control selected track 
     this._audioProvider.pause(this.myTracks[0]);
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  } 



}
