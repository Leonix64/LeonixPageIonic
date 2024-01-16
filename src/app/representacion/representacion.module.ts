import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RepresentacionPageRoutingModule } from './representacion-routing.module';

import { RepresentacionPage } from './representacion.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RepresentacionPageRoutingModule
  ],
  declarations: [RepresentacionPage]
})
export class RepresentacionPageModule {}
