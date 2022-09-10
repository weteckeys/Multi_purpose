import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-cat',
  templateUrl: './movie-cat.page.html',
  styleUrls: ['./movie-cat.page.scss'],
})
export class MovieCatPage implements OnInit {

  allGenres = [
    'All',
    'Movies',
    'TV Shows'
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
