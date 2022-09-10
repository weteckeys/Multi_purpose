import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MoreModalPage } from '../more-modal/more-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modalController: ModalController) { }

  tabChange(event) {
    console.log(event);
  }

  onClick(val) {
    console.log(val);
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: MoreModalPage,
      cssClass: 'custom_modal'
    });
    return await modal.present();
  }

}
