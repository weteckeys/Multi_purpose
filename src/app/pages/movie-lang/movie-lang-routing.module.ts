import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieLangPage } from './movie-lang.page';

const routes: Routes = [
  {
    path: '',
    component: MovieLangPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieLangPageRoutingModule {}
