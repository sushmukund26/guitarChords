import { Component, Output, EventEmitter } from '@angular/core';
import { NavController, PopoverController, ViewController, NavParams } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { AddSong } from '../addSong/addSong';
import { ChordsDisplayPage } from '../chords_display/chords_display';
import { songListService } from '../../services/songList.service';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="filter('english')">English</button>
      <button ion-item (click)="filter('hindi')">Hindi</button>
      <button ion-item (click)="filter('malayalam')">Malayalam</button>
      <button ion-item (click)="filter('tamil')">Tamil</button>
    </ion-list>
  `,
  selector: 'popOver'
})
export class PopoverPage {
  private _anEmitter: EventEmitter< any >;

  constructor( public navParams: NavParams, public viewCtrl: ViewController ) {
    this._anEmitter = navParams.data.theEmitter;
  }

  filter( somePassedArg: string ) {
    console.log("First value"+somePassedArg)
    this._anEmitter.emit( somePassedArg );
    this.viewCtrl.dismiss();
  }

  // @Output() filtered = new EventEmitter<boolean>();

  // filter(value) {
  //   this.filtered.emit(value);
  // }
}

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
  posts;
  test;

  constructor(public navCtrl: NavController, private songListService: songListService, public http: Http, public popoverCtrl: PopoverController) {
    this.addSong = AddSong;
    this.songList = this.songListService.getSongList();
    this.displayedSongList = this.songList;
    console.log("--------------");
    console.log(this.displayedSongList);
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

 presentPopover(myEvent) {

   let myEmitter = new EventEmitter< any >();
    myEmitter.subscribe(
      v => this.filter(v)
    );

    let popover = this.popoverCtrl.create(PopoverPage, {theEmitter: myEmitter});
    popover.present({
      ev: "myEvent"
      // (voted): "filter($event)"
    });
  }

  filter(language: string) {
    console.log("First language"+language)
    this.displayedSongList = this.songList;
    this.displayedSongList = this.displayedSongList.filter((song) => {
          return song.language.toLowerCase().indexOf(language.toLowerCase()) > -1;
        }); 
  }
}

