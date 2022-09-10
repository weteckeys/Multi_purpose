import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoviePlarformPageRoutingModule } from './movie-plarform-routing.module';

import { MoviePlarformPage } from './movie-plarform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoviePlarformPageRoutingModule
  ],
  declarations: [MoviePlarformPage]
})
export class MoviePlarformPageModule {}
