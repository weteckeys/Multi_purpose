import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoreModalPage } from './more-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MoreModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoreModalPageRoutingModule {}
