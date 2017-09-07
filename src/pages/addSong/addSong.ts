import { Component } from '@angular/core';
import { NavController , NavParams , AlertController } from 'ionic-angular';

import { ChordsPage } from '../chords/chords';
import { songListService } from '../../services/songList.service';


@Component({
  selector: 'addSong',
  templateUrl: 'addSong.html'
})
export class AddSong {
  songList;
  searchTerm;
  songName;
  capo;
  isEdit;
  title;
  chords;

  constructor(public navCtrl: NavController, private navParams : NavParams ,private songListService: songListService, private alertCtrl: AlertController) {
    this.songList = this.songListService.getSongList();
    this.isEdit = this.navParams.get("isEdit");
    if(this.isEdit) {
      this.title = "Edit Song";
      this.songName = this.navParams.get("song").name;
      this.capo = this.navParams.get("song").capo;
      this.chords = this.navParams.get("song").chords;
      this.chords = this.chords.split("<br />").join("\n");
    }
    else {
      this.title = "Add Song";
    }
    }

  confirmSong() {
      let alert = this.alertCtrl.create({
    title: 'Confirm song',
    buttons: [
    {
        text: 'OK',
        handler: () => {
          console.log('OK clicked '+this.songName+ ' '+this.capo + ' '+this.chords);  
          if(this.isEdit) {
            //find and update
            for(let song of this.songList) {
              if(song.name == this.songName) {
                song.chords = this.chords;
                song.capo = this.capo;
              }
            }
          }
          else {
            this.songList.push({name : this.songName , capo : this.capo , chords : this.chords});
          }
          this.songListService.setSongList(this.songList);
          this.navCtrl.push(ChordsPage);

        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }
    ]
  });
  alert.present();
  }
  
}
