import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cricket',
  templateUrl: './cricket.page.html',
  styleUrls: ['./cricket.page.scss'],
})
export class CricketPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.3,
  };
  games;
  allNews;
  constructor(private game: GamesService, private dummy: DummyService, private router: Router, private navCtrl: NavController) {
    this.games = this.game.games;
    this.allNews = this.dummy.news;
  }

  ngOnInit() {
  }

  goToNews(val) {
    const navData: NavigationExtras = {
      queryParams : {
        id : val
      }
    };

    this.router.navigate(['/tabs/news'], navData);
  }

  goToCricketVideo() {
    this.router.navigate(['/cricket-news']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
