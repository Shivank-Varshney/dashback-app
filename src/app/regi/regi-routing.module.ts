import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegiPage } from './regi.page';

const routes: Routes = [
  {
    path: '',
    component: RegiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegiPageRoutingModule {}
