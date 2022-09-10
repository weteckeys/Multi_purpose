import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieGanresPageRoutingModule } from './movie-ganres-routing.module';

import { MovieGanresPage } from './movie-ganres.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieGanresPageRoutingModule
  ],
  declarations: [MovieGanresPage]
})
export class MovieGanresPageModule {}
