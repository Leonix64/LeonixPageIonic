import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RepresentacionPage } from './representacion.page';

const routes: Routes = [
  {
    path: '',
    component: RepresentacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RepresentacionPageRoutingModule {}
