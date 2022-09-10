import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieLangPageRoutingModule } from './movie-lang-routing.module';

import { MovieLangPage } from './movie-lang.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieLangPageRoutingModule
  ],
  declarations: [MovieLangPage]
})
export class MovieLangPageModule {}
