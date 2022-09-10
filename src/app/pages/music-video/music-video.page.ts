import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-music-video',
  templateUrl: './music-video.page.html',
  styleUrls: ['./music-video.page.scss'],
})
export class MusicVideoPage implements OnInit {

  songs;
  slideOpts = {
    slidesPerView: 3,
  };

  albumList = [
    {
      name: 'Kaise Hua',
      artist : 'Vishal Mishra',
      time : '3:55'
    },
    {
      name: 'Tuje kitna chahne lage',
      artist : 'Arijit Singh',
      time : '4:45'
    },
    {
      name: 'Mere Sonheya',
      artist : 'Parampara Thakur, Sachet Tandon',
      time : '3:13'
    },
    {
      name: 'Tera Ban Jaunga',
      artist : 'Tulsi Kumar, Akhil Sachdeva',
      time : '3:57'
    },
    {
      name: 'Pehla Pyaar',
      artist : 'Armaan Malik',
      time : '4:33'
    },
  ];
  constructor(private music: MusicService , private navCtrl: NavController) {
    this.songs = this.music.songs;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
