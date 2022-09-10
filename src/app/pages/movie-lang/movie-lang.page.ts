import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-movie-lang',
  templateUrl: './movie-lang.page.html',
  styleUrls: ['./movie-lang.page.scss'],
})
export class MovieLangPage implements OnInit {

  lang = ['Gujrati', 'Hindi', 'English', 'Marathi', 'Panjabi', 'Nepali', 'Tamil', 'Telugu', 'Bengali', 'Urdu'];
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
