import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MulherMaravilhaPage } from './mulher-maravilha.page';

const routes: Routes = [
  {
    path: '',
    component: MulherMaravilhaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MulherMaravilhaPageRoutingModule {}
