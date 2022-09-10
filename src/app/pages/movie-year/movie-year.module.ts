import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieYearPageRoutingModule } from './movie-year-routing.module';

import { MovieYearPage } from './movie-year.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieYearPageRoutingModule
  ],
  declarations: [MovieYearPage]
})
export class MovieYearPageModule {}
