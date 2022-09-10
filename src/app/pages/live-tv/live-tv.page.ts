import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-live-tv',
  templateUrl: './live-tv.page.html',
  styleUrls: ['./live-tv.page.scss'],
})
export class LiveTvPage implements OnInit {

  repoters;
  repoter = 'English';
  channelList;
  constructor(private dummy: DummyService) {
    this.repoters = this.dummy.repoters;
    this.channelList = this.dummy.channelList;
  }

  ngOnInit() {
  }

  selectLang(val) {
    this.repoter = val;
  }

}
