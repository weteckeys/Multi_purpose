import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, NavigationExtras } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-more-modal',
  templateUrl: './more-modal.page.html',
  styleUrls: ['./more-modal.page.scss'],
})
export class MoreModalPage implements OnInit {

  moreCat;
  constructor(
    private dummy: DummyService,
    private router: Router,
    private modalController: ModalController) {
    this.moreCat = this.dummy.moreCat;
  }

  ngOnInit() {
  }
  dismiss() {
    this.modalController.dismiss();
  }
  goToPage(val) {
    console.log(val.name);

    const navData: NavigationExtras = {
      queryParams: {
        id: val.name
      }
    };

    if (val.name === 'Music') {
      this.dismiss();
      this.router.navigate(['/tabs/music']);
      return;
    }

    if (val.name === 'Cricket') {
      this.dismiss();
      this.router.navigate(['/tabs/cricket']);
      return;
    }

    if (val.name === 'Movies') {
      this.dismiss();
      this.router.navigate(['/tabs/movies'], navData);
      return;
    }

    if (val.name === 'Live TV') {
      this.dismiss();
      this.router.navigate(['/tabs/live-tv'], navData);
      return;
    }

    if (val.name === 'Shopping') {
      this.dismiss();
      this.router.navigate(['/tabs/main-page'], navData);
      return;
    }

    if (val.name === 'Images') {
      this.dismiss();
      this.router.navigate(['/tabs/main-page'], navData);
      return;
    }

    if (val.name === 'Maps') {
      this.dismiss();
      this.router.navigate(['/tabs/maps'], navData);
      return;
    }

    if (val.name === 'Settings') {
      this.dismiss();
      this.router.navigate(['/settings'], navData);
      return;
    }

  }

}
