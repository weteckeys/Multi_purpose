import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { MusicService } from 'src/app/services/music.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  lang;
  sel;
  constructor(private music: MusicService, private router: Router, private navCtrl: NavController) {
    this.lang = this.music.singers;
  }

  ngOnInit() {
  }

  selectLang(val) {
    this.sel = val;
  }

  goToMusicList() {
    this.router.navigate(['/tabs/music-list']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
