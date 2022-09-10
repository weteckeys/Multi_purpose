import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router } from '@angular/router';
import { ActionSheetController, NavController, ModalController } from '@ionic/angular';
import { MovieCatPage } from '../movie-cat/movie-cat.page';
import { MovieLangPage } from '../movie-lang/movie-lang.page';
import { MovieRatingPage } from '../movie-rating/movie-rating.page';
import { MovieGanresPage } from '../movie-ganres/movie-ganres.page';
import { MovieYearPage } from '../movie-year/movie-year.page';
import { MoviePlarformPage } from '../movie-plarform/movie-plarform.page';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  moviesCat = [ 'Movies', 'Languages', 'Ratings', 'Genre', 'Year', 'Platform'];
  currentCat;
  movies;

  slideOpts = {
    slidesPerView: 3,
  };

  constructor(
    private dummy: DummyService,
    private router: Router,
    private actionSheetController: ActionSheetController,
    private navCtrl: NavController,
    private modalController: ModalController
  ) {
    this.movies = this.dummy.movies;
  }

  ngOnInit() {
  }

  selectCat(val) {
    this.currentCat = val;
    console.log(this.currentCat);

    if (this.currentCat === 'Movies') {
      this.openMovieCat();
    }

    if (this.currentCat === 'Languages') {
      this.openMovieLang();
    }

    if (this.currentCat === 'Ratings') {
      this.openMovieRate();
    }

    if (this.currentCat === 'Genre') {
      this.openMovieGenre();
    }

    if (this.currentCat === 'Year') {
      this.openMovieYear();
    }

    if (this.currentCat === 'Platform') {
      this.openMoviePlat();
    }
  }

  async openActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'md',
      buttons: [
        {
          text: 'About Movies Online',
          icon: 'caret-forward-circle-outline',
        },
        {
          text: 'How to Use',
          icon: 'help-circle-outline',
        },
        {
          text: 'FAQs',
          icon: 'alert-circle-outline',
        },
        {
          text: 'Blogs',
          icon: 'document-text-outline',
        }
      ]
    });
    await actionSheet.present();
  }

  goToPopular() {
    this.router.navigate(['/tabs/popular']);
  }

  goToMovieDetail() {
    this.router.navigate(['/tabs/movie-details']);
  }

  goBack() {
    this.navCtrl.back();
  }

  async openMovieCat() {
    const modal = await this.modalController.create({
      component: MovieCatPage,
      cssClass: 'transparent_modal'
    });
    return await modal.present();
  }

  async openMovieLang() {
    const modal = await this.modalController.create({
      component: MovieLangPage,
      cssClass: 'transparent_modal'
    });
    return await modal.present();
  }

  async openMovieRate() {
    const modal = await this.modalController.create({
      component: MovieRatingPage,
      cssClass: 'transparent_modal'
    });
    return await modal.present();
  }

  async openMovieGenre() {
    const modal = await this.modalController.create({
      component: MovieGanresPage,
      cssClass: 'transparent_modal'
    });
    return await modal.present();
  }

  async openMovieYear() {
    const modal = await this.modalController.create({
      component: MovieYearPage,
      cssClass: 'transparent_modal'
    });
    return await modal.present();
  }

  async openMoviePlat() {
    const modal = await this.modalController.create({
      component: MoviePlarformPage,
      cssClass: 'transparent_modal'
    });
    return await modal.present();
  }

}
