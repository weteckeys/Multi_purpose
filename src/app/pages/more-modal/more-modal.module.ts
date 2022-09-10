import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MoreModalPageRoutingModule } from './more-modal-routing.module';

import { MoreModalPage } from './more-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MoreModalPageRoutingModule
  ],
  declarations: [MoreModalPage]
})
export class MoreModalPageModule {}
