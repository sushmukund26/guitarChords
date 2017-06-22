import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
//import { MediaPlugin } from 'ionic-native';

//import { MediaCapture, MediaFile, CaptureError } from '@ionic-native/media-capture';

// import { MediaPlugin, MediaObject } from '@ionic-native/media';
// import { File } from '@ionic-native/file';

@Component({
  selector: 'record',
  templateUrl: 'record.html'
})
export class RecordPage {
// var file
  constructor(public navCtrl: NavController) {
   // file: MediaObject = this.media.create('/Downloads/file.mp3');

  }
  startRecording() {


//   	this.file.createFile(this.file.tempDirectory, 'my_file.m4a', true).then(() => {
//   let file = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'my_file.m4a');
//   file.startRecord();
//   window.setTimeout(() => file.stopRecord(), 10000);
// });
  
	
}

}
