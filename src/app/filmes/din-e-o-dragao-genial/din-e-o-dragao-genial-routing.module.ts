import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DinEODragaoGenialPage } from './din-e-o-dragao-genial.page';

const routes: Routes = [
  {
    path: '',
    component: DinEODragaoGenialPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DinEODragaoGenialPageRoutingModule {}
