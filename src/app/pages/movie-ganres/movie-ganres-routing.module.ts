import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieGanresPage } from './movie-ganres.page';

const routes: Routes = [
  {
    path: '',
    component: MovieGanresPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieGanresPageRoutingModule {}
