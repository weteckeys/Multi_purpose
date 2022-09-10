import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialNewsPageRoutingModule } from './special-news-routing.module';

import { SpecialNewsPage } from './special-news.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialNewsPageRoutingModule
  ],
  declarations: [SpecialNewsPage]
})
export class SpecialNewsPageModule {}
