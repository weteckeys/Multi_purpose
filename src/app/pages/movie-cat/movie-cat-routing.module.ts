import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieCatPage } from './movie-cat.page';

const routes: Routes = [
  {
    path: '',
    component: MovieCatPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieCatPageRoutingModule {}
