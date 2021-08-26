import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MulherMaravilhaPageRoutingModule } from './mulher-maravilha-routing.module';

import { MulherMaravilhaPage } from './mulher-maravilha.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MulherMaravilhaPageRoutingModule
  ],
  declarations: [MulherMaravilhaPage]
})
export class MulherMaravilhaPageModule {}
