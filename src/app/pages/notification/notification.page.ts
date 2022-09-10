import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ModalController, NavController } from '@ionic/angular';
import { NotificationModalPage } from '../notification-modal/notification-modal.page';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {

  notification;
  constructor(private dummy: DummyService, private modalController: ModalController, private navCtrl: NavController) {
    this.notification = this.dummy.notification;
  }

  ngOnInit() {
  }

  async openModel() {
    const modal = await this.modalController.create({
      component: NotificationModalPage,
      cssClass: 'custom_modal2'
    });
    return await modal.present();
  }

  goBack() {
    this.navCtrl.back();
  }

}
