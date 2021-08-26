import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HotelTransilvaniaPageRoutingModule } from './hotel-transilvania-routing.module';

import { HotelTransilvaniaPage } from './hotel-transilvania.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HotelTransilvaniaPageRoutingModule
  ],
  declarations: [HotelTransilvaniaPage]
})
export class HotelTransilvaniaPageModule {}
