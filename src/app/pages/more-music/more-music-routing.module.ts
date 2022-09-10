import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreMusicPage } from './more-music.page';

const routes: Routes = [
  {
    path: '',
    component: MoreMusicPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreMusicPageRoutingModule {}
