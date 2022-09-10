import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActionSheetController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  templateUrl: './popular.page.html',
  styleUrls: ['./popular.page.scss'],
})
export class PopularPage implements OnInit {

  currentCat;
  moviesCat = [ 'Movies', 'Languages', 'Ratings', 'Genre', 'Year', 'Platform'];
  movies;

  constructor(
    private dummy: DummyService,
    private actionSheetController: ActionSheetController,
    private router: Router, private navCtrl: NavController
  ) {
    this.movies = this.dummy.movies;
  }

  ngOnInit() {
  }
  selectCat(val) {
    this.currentCat = val;
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

  goToMovieDetail() {
    this.router.navigate(['/tabs/movie-details']);
  }

  goBack() {
    this.navCtrl.back();
  }

}
