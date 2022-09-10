import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ModalController, ActionSheetController } from '@ionic/angular';
import { ChooseLanguagePage } from '../choose-language/choose-language.page';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  sliderImage;
  allNews;
  isSignIn;
  plt;
  constructor(
    private dummy: DummyService,
    private modalController: ModalController,
    private actionSheetController: ActionSheetController,
    private router: Router
  ) {
    this.plt = localStorage.getItem('platform');
    this.sliderImage = this.dummy.slider;
    this.allNews = this.dummy.news;

    console.log(this.sliderImage);
  }

  ngOnInit() {
    if (localStorage.getItem('username') && localStorage.getItem('username') !== 'null') {
      this.isSignIn = true;
    } else {
      this.isSignIn = false;
    }
  }

  async goToChooseLanguage() {
    const modal = await this.modalController.create({
      component: ChooseLanguagePage,
    });
    return await modal.present();
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'md',
      buttons: [
        {
          text: 'Hide Post',
          icon: 'eye-off-outline',
        },
        {
          text: 'Follow South China Morning Post',
          icon: 'person-add-outline',
        },
        {
          text: 'Report Post',
          icon: 'alert-circle-outline',
        }
      ]
    });
    await actionSheet.present();
  }

  async shareActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'md',
      buttons: [
        {
          text: 'Post on JdSocial',
          icon: 'sync-circle-outline',
        },
        {
          text: 'Share on facebook',
          icon: 'logo-facebook',
        },
        {
          text: 'Send on WhatsApp',
          icon: 'logo-whatsapp',
        },
        {
          text: 'Copy Link',
          icon: 'copy-outline',
        },
        {
          text: 'More Options..',
          icon: 'ellipsis-horizontal-circle-outline',
        }
      ]
    });
    await actionSheet.present();
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  goToNotification() {
    this.router.navigate(['/tabs/notification']);
  }

  goToMain(val) {

    var myid;
    var mydesc;

    if ( val.name === 'Shopping') {
      myid = 'Shopping';
      mydesc = '';
    } else {
      myid = 'Search';
      mydesc = val.name;
    }

    const navData: NavigationExtras = {
      queryParams: {
        id : myid,
        desc : mydesc
      }
    };

    this.router.navigate(['/tabs/main-page'], navData);
  }

}
