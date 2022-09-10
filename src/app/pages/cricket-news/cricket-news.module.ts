import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CricketNewsPageRoutingModule } from './cricket-news-routing.module';

import { CricketNewsPage } from './cricket-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CricketNewsPageRoutingModule
  ],
  declarations: [CricketNewsPage]
})
export class CricketNewsPageModule {}
