import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {

  movies;
  review;

  slideOpts = {
    slidesPerView: 3,
  };

  slideOpts2 = {
    slidesPerView: 1.3,
  };

  constructor(private dummy: DummyService, private navCtrl: NavController) {
    this.movies = this.dummy.movies;
    this.review = this.dummy.users;
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
