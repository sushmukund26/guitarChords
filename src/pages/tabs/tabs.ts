import { Component } from '@angular/core';

import { RecordPage } from '../record/record';
import { SongsPage } from '../songs/songs';
import { ChordsPage } from '../chords/chords';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ChordsPage;
  tab2Root = RecordPage;
  tab3Root = SongsPage;

  constructor() {

  }
}
