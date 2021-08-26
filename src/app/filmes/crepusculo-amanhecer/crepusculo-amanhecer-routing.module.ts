import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrepusculoAmanhecerPage } from './crepusculo-amanhecer.page';

const routes: Routes = [
  {
    path: '',
    component: CrepusculoAmanhecerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrepusculoAmanhecerPageRoutingModule {}
