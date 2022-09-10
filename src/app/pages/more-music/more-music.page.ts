import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-more-music',
  templateUrl: './more-music.page.html',
  styleUrls: ['./more-music.page.scss'],
})
export class MoreMusicPage implements OnInit {

  songs;
  constructor(private music: MusicService, private router: Router, private navCtrl: NavController) {
    this.songs = this.music.songs;
  }

  ngOnInit() {
  }

  goToMusicVideo() {
    this.router.navigate(['/tabs/music-video']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
