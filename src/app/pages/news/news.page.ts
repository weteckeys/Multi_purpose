import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { NewsService } from 'src/app/services/news.service';
import { GamesService } from 'src/app/services/games.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  stories;
  lang;
  currentLang;
  allNews;
  category;
  currentCat;
  moviesCat = [ 'Search', 'Shopping', 'Maps', 'Images', 'News', 'Videos', 'Social'];
  plt;

  constructor(
    private dummy: DummyService,
    private router: Router,
    private news: NewsService,
    private route: ActivatedRoute,
    private game: GamesService,
    private actionSheetController: ActionSheetController) {

    this.plt = localStorage.getItem('platform');

    this.stories = this.dummy.story;
    this.lang = this.dummy.lang;
    this.allNews = this.news.news;

    this.route.queryParams.subscribe(data => {
      console.log(data.id);
      this.category = data.id;
      this.currentCat = data.id;

      if (this.category === 'Cricket') {
        this.allNews = this.game.games;
        return;
      }

    });

  }

  ngOnInit() {
  }

  selectLang(val) {
    this.currentLang = val;
  }

  goToLiveTv() {
    this.router.navigate(['/tabs/live-tv']);
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      mode: 'md',
      buttons: [
        {
          text: 'Save',
          icon: 'bookmark-outline',
        },
        {
          text: 'View full coverage',
          icon: 'document-text-outline',
        },
        {
          text: 'Like this stoty',
          icon: 'thumbs-up-sharp',
        },
        {
          text: 'Follow the Times Of India',
          icon: 'person-add-outline',
        },
        {
          text: 'More stories like this',
          icon: 'checkmark-circle-outline',
        },
        {
          text: 'Fewer stories like this',
          icon: 'remove-circle-outline',
        },
        {
          text: 'Comment',
          icon: 'chatbox-outline',
        },
        {
          text: 'Copy Link',
          icon: 'copy-outline',
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

  goToNotification() {
    this.router.navigate(['/tabs/notification']);
  }

}
