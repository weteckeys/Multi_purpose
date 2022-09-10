import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieCatPageRoutingModule } from './movie-cat-routing.module';

import { MovieCatPage } from './movie-cat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieCatPageRoutingModule
  ],
  declarations: [MovieCatPage]
})
export class MovieCatPageModule {}
