import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CvFormPage } from './cv-form.page';

const routes: Routes = [
  {
    path: '',
    component: CvFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CvFormPageRoutingModule {}
