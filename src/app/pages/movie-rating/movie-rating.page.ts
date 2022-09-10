import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-rating',
  templateUrl: './movie-rating.page.html',
  styleUrls: ['./movie-rating.page.scss'],
})
export class MovieRatingPage implements OnInit {

  rating = [
    'Popular',
    'Highest to Lowest',
    '90% and above' ,
    '80% and above',
    '70% and above',
    '60% and above',
    '50% and above',
    'Bolow 50%',
    'Any'
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
