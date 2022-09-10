import { Component, OnInit } from '@angular/core';
import { ShopService } from 'src/app/services/shop.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.page.html',
  styleUrls: ['./main-page.page.scss'],
})
export class MainPagePage implements OnInit {

  currentCat;
  moviesCat = [ 'Search', 'Shopping', 'Maps', 'Images', 'News', 'Videos', 'Social'];
  slider;
  products;
  beauty;
  deal;
  featureCat;
  images;
  id;
  clinic;
  plt;

  slideOpts = {
    slidesPerView: 3.5,
  };

  slideOpts2 = {
    slidesPerView: 3,
  };

  constructor(
    private shop: ShopService,
    private router: Router,
    private route: ActivatedRoute,
    private actionSheetController: ActionSheetController,
    private search: SearchService
  ) {

    this.plt = localStorage.getItem('platform');
    this.route.queryParams.subscribe(data => {
      console.log(data.id);
      this.id = data.id;
    });

    this.slider = this.shop.slider;
    this.products = this.shop.products;
    this.beauty = this.shop.beauty;
    this.deal = this.shop.deals;
    this.featureCat = this.shop.featureCat;
    this.images = this.shop.images;
    this.clinic = this.search.clinic;
  }

  ngOnInit() {
  }

  selectCat(val) {

    const navData: NavigationExtras = {
      queryParams: {
        id : val
      }
    };

    console.log(val);
    this.currentCat = val;
    this.id = val;

    if (this.currentCat === 'News') {
      this.router.navigate(['/tabs/news'], navData);
    }

    if (this.currentCat === 'Videos') {
      this.router.navigate(['/tabs/videos'], navData);
    }

    if (this.currentCat === 'Social') {
      this.router.navigate(['/tabs/social'], navData);
    }

    if (this.currentCat === 'Maps') {
      this.router.navigate(['/tabs/maps'], navData);
    }
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

}
