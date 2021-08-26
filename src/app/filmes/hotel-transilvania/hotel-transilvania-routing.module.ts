import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HotelTransilvaniaPage } from './hotel-transilvania.page';

const routes: Routes = [
  {
    path: '',
    component: HotelTransilvaniaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelTransilvaniaPageRoutingModule {}
