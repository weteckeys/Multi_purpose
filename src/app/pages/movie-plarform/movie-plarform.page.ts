import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-plarform',
  templateUrl: './movie-plarform.page.html',
  styleUrls: ['./movie-plarform.page.scss'],
})
export class MoviePlarformPage implements OnInit {

  platform = [
    'Airtel Movies',
    'Alt Balaji',
    'Amazon Prime Video',
    'Apple TV Plus',
    'Aplle iTunes',
    'Eros Now',
    'Google Play Movies',
    'Guide Doc',
    'Hotstar',
    'Jio Cinema',
    'Netflix',
    'Sony Liv',
    'Voot',
    'Youtube',
    'Zee5',
  ];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
