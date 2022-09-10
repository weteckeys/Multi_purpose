import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { MusicService } from 'src/app/services/music.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-music-list',
  templateUrl: './music-list.page.html',
  styleUrls: ['./music-list.page.scss'],
})
export class MusicListPage implements OnInit {

  songs;
  slideOpts = {
    slidesPerView: 3,
  };
  constructor(private music: MusicService, private router: Router, private navCtrl: NavController) {
    this.songs = this.music.songs;
  }

  ngOnInit() {
  }

  goToMoreMusic() {
    this.router.navigate(['/tabs/more-music']);
  }

  goToMusicVideo() {
    this.router.navigate(['/tabs/music-video']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
