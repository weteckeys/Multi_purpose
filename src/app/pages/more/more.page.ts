import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoreModalPage } from '../more-modal/more-modal.page';

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: MoreModalPage,
      cssClass : 'custom_modal'
    });
    return await modal.present();
  }

}
