import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { AddSong } from '../addSong/addSong';
import { ChordsDisplayPage } from '../chords_display/chords_display';
import { songListService } from '../../services/songList.service';


@Component({
  selector: 'chords',
  templateUrl: 'chords.html'
})
export class ChordsPage {
  songList;
  displayedSongList;
  searchTerm;
  addSong;
  order: string = 'name';

  constructor(public navCtrl: NavController, private songListService: songListService) {
    this.addSong = AddSong;
    this.songList = this.songListService.getSongList();
    this.displayedSongList = this.songList;

    }

   viewChords(selectedSong) {
     this.navCtrl.push(ChordsDisplayPage,{
      song: selectedSong
    });
    }

   onInput() {
      if(this.searchTerm == "") {
       this.displayedSongList = this.songList;
     }
     else {
       this.displayedSongList = this.displayedSongList.filter((song) => {
          return song.name.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
        }); 
    }
  }
}

