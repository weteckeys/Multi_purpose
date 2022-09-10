import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreMusicPageRoutingModule } from './more-music-routing.module';

import { MoreMusicPage } from './more-music.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreMusicPageRoutingModule
  ],
  declarations: [MoreMusicPage]
})
export class MoreMusicPageModule {}
