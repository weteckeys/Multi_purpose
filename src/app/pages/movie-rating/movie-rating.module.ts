import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieRatingPageRoutingModule } from './movie-rating-routing.module';

import { MovieRatingPage } from './movie-rating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieRatingPageRoutingModule
  ],
  declarations: [MovieRatingPage]
})
export class MovieRatingPageModule {}
