import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { ActionSheetController } from '@ionic/angular';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
})
export class VideosPage implements OnInit {

  stories;
  lang;
  currentLang;
  videoList;
  currentCat;
  moviesCat = [ 'Search', 'Shopping', 'Maps', 'Images', 'News', 'Videos', 'Social'];
  videoCat = ['English', 'Topics', 'For You', 'All', 'Cricket', 'Live TV', 'BollyWood', 'Business', 'Science'];
  vCat;
  plt;

  constructor(
    private dummy: DummyService,
    private actionSheetController: ActionSheetController,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.plt = localStorage.getItem('platform');
    this.videoList = this.dummy.news;
    this.stories = this.dummy.story;
    this.lang = this.dummy.lang;

    this.route.queryParams.subscribe(data => {
      console.log(data.id);
      this.currentCat = data.id;
    });
  }

  ngOnInit() {
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

  selectCat(val) {

    const navData: NavigationExtras = {
      queryParams: {
        id : val
      }
    };

    console.log(val);
    this.currentCat = val;

    if (this.currentCat === 'News') {
      this.router.navigate(['/tabs/news'], navData);
    }

    if (this.currentCat === 'Videos') {
      this.router.navigate(['/tabs/videos'], navData);
    }

    if (this.currentCat === 'Social') {
      this.router.navigate(['/tabs/social'], navData);
    }
  }

  selectVideoCat(val) {
    this.vCat = val;
  }

  selectLang(val) {
    this.currentLang = val;
  }

  goToNotification() {
    this.router.navigate(['/tabs/notification']);
  }

}
