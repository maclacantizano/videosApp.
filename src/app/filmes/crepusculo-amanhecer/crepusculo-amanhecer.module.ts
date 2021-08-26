import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrepusculoAmanhecerPageRoutingModule } from './crepusculo-amanhecer-routing.module';

import { CrepusculoAmanhecerPage } from './crepusculo-amanhecer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrepusculoAmanhecerPageRoutingModule
  ],
  declarations: [CrepusculoAmanhecerPage]
})
export class CrepusculoAmanhecerPageModule {}
