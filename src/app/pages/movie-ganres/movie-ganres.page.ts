import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-ganres',
  templateUrl: './movie-ganres.page.html',
  styleUrls: ['./movie-ganres.page.scss'],
})
export class MovieGanresPage implements OnInit {

  allGenres = [
    'Action & Advanture',
    'Amination',
    'Comedy',
    'Crime',
    'Drama',
    'Fantasy',
    'History',
    'Horror',
    'Kids & Family',
    'Music & Musical',
    'Mystery & Thriller',
    'Romance',
    'Science & Fiction',
    'Sports & Fitness',
    'War & Military',
    'Western',
  ];

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
