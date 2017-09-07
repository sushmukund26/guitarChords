import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, Platform } from 'ionic-angular';
 
import { MediaPlugin } from 'ionic-native';
 
@Component({
 selector: 'page-audio-recorder',
  templateUrl: 'record.html'
})
export class RecordPage {
 mediaPlugin = null;
 recorded: boolean;
 song;
 
 ionViewDidLoad() {
   console.log('ionViewDidLoad AudioRecorderPage');
 }
 
 constructor(public navCtrl: NavController,
             public alertCtrl: AlertController,
             public platform: Platform) {
                 this.song = "Song_" + Math.floor(Math.random() * (100));
                 this.recorded = false;
 }
 
 get MediaPlugin() {
   if (this.mediaPlugin == null) {
     this.mediaPlugin = new MediaPlugin('Audio/' + this.song + '.mp3');
   }
 
   return this.mediaPlugin;
 }
 
 startRecording() {
   try {
         this.mediaPlugin = new MediaPlugin('Audio/' + this.song + '.mp3');
        this.MediaPlugin.startRecord();
   }
   catch (e) {
     this.showAlert('Error: '+ e);
   }
 }

 startRecordingTest() {
//   var path = "file:///storage/emulated/0/Audio";
// var filename = "please.mp3";

// window.resolveLocalFileSystemURL(path, function(dir) {
//   dir.getFile(filename, {create:false}, function(fileEntry) {
//               fileEntry.remove(function(){
//                   // The file has been removed succesfully
//               },function(error){
//                   // Error deleting the file
//               },function(){
//                  // The file doesn't exist
//               });
//   });
// });
 }
 
 stopRecording() {
   try {     
     this.MediaPlugin.stopRecord();
     this.recorded = true;
   }
   catch (e) {
     this.showAlert('Error: '+ e);
   }
 }
 
 playRecording() {
   try {
     this.MediaPlugin.play();
   }
   catch (e) {
     this.showAlert('Error: '+ e);
   }
 }
 
 stopRecordingPlay() {
   try {
     this.MediaPlugin.stop();
   }
   catch (e) {
     this.showAlert('Error: '+ e);
   }
 }
 
 showAlert(message) {
   let alert = this.alertCtrl.create({
     title: 'Error',
     subTitle: message,
     buttons: ['OK']
   });
   alert.present();
 }
}