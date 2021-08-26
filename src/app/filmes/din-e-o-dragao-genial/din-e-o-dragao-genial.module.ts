import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DinEODragaoGenialPageRoutingModule } from './din-e-o-dragao-genial-routing.module';

import { DinEODragaoGenialPage } from './din-e-o-dragao-genial.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DinEODragaoGenialPageRoutingModule
  ],
  declarations: [DinEODragaoGenialPage]
})
export class DinEODragaoGenialPageModule {}
