import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieYearPage } from './movie-year.page';

const routes: Routes = [
  {
    path: '',
    component: MovieYearPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieYearPageRoutingModule {}
