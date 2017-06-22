import { Component } from '@angular/core';
import { NavController , NavParams , AlertController } from 'ionic-angular';

import { AddSong } from '../addSong/addSong';

import { FileOpener } from '@ionic-native/file-opener';


@Component({
  selector: 'chords_display',
  templateUrl: 'chords_display.html'
})

export class ChordsDisplayPage {
song;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private fileOpener: FileOpener) {
  	this.song = navParams.get("song");

    this.song.chords = this.song.chords.replace(/\n/g, "<br />");

  }

  editChords() {
  		this.navCtrl.push(AddSong,{
			isEdit: true,
			song : this.song
		});

  }


  playFile() {
    // this.fileOpener.open('/storage/emulated/0/Download/hamma.mp3', 'audio/mpeg3')
    //   .then(() => console.log('File is opened'))
    //   .catch(e => console.log('Error openening file', e));


    this.fileOpener.open('file://storage/emulated/0/Download/hamma.mp3', 'audio/mpeg3')
      .then(() => console.log('File is opened'))
      .catch(e => console.log('Error openening file', e));


      // const onStatusUpdate = (status) => console.log(status);
      // const onSuccess = () => console.log('Action is successful.');
      // const onError = (error) => console.error(error.message);

      // const file: MediaObject = this.media.create('storage/emulated/0/Download/hamma.mp3', onStatusUpdate, onSuccess, onError);

      // // play the file
      // file.play();

  }

  showChordChart(chordsList) {

  }

}
