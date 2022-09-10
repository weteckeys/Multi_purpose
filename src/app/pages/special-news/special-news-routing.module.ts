import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialNewsPage } from './special-news.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialNewsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialNewsPageRoutingModule {}
