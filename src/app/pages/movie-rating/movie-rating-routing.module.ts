import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieRatingPage } from './movie-rating.page';

const routes: Routes = [
  {
    path: '',
    component: MovieRatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieRatingPageRoutingModule {}
