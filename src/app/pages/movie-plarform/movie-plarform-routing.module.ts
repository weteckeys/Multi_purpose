import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviePlarformPage } from './movie-plarform.page';

const routes: Routes = [
  {
    path: '',
    component: MoviePlarformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviePlarformPageRoutingModule {}
