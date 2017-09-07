import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

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
  posts;
  test;

  constructor(public navCtrl: NavController, private songListService: songListService, public http: Http) {
    this.addSong = AddSong;
    this.songList = this.songListService.getSongList();
    this.displayedSongList = this.songList;



   let opt: RequestOptions
   let myHeaders: Headers = new Headers
   myHeaders.append('Content-Type', 'application/json')
   myHeaders.append('Access-Control-Allow-Origin', '*')
   // "Access-Control-Allow-Origin: *"
   
   opt = new RequestOptions({
     headers: myHeaders
    })   

     this.test = this.http.get('http://billwale-api.azurewebsites.net/user', opt).map(res => res.json()).subscribe(data => {
      console.log(data);
      this.test = data;
      return data;
    });
    // console.log(this.test.length);
    // problem



    // problem

//     return new Promise((resolve,reject) => {
//   var json = JSON.stringify({ "output": {"count" : 6}});
//   var params = 'json=' + json;
//   var myHeaders = new Headers();
//   myHeaders.set('userId', 'eeSt9q2SMi');
//    myHeaders.append('Content-Type', 'application/json')
//    myHeaders.append('Access-Control-Allow-Origin', '*')

//   this.http.post('http://10.134.22.19:3000/challenge/output',
//       params, {
//           headers: headers
//       })
//       .map(res => res.json())
//       .subscribe(data => {
//           this.data = data;
//           resolve(this.data);
//       },
//       error => reject(error),
//       () => console.log("Finished")
//   );
// });

    //  this.http.post('10.134.22.19:3000/challenge/output').map(res => res.json()).subscribe(data => {
    //     this.posts = data.data.children;
    //     console.log("thajdhfkjdnkjdasfn"+this.posts);
    // });

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

