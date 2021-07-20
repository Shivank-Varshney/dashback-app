import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DematPage } from './demat.page';

const routes: Routes = [
  {
    path: '',
    component: DematPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DematPageRoutingModule {}
