import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CvFormPageRoutingModule } from './cv-form-routing.module';

import { CvFormPage } from './cv-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CvFormPageRoutingModule
  ],
  declarations: [CvFormPage]
})
export class CvFormPageModule {}
