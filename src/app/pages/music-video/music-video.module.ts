import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MusicVideoPageRoutingModule } from './music-video-routing.module';

import { MusicVideoPage } from './music-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MusicVideoPageRoutingModule
  ],
  declarations: [MusicVideoPage]
})
export class MusicVideoPageModule {}
