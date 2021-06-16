import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CirclePage } from './circle.page';

const routes: Routes = [
  {
    path: '',
    component: CirclePage
  },
  {
    path: ':id/:ib/:name',
    component: CirclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CirclePageRoutingModule {}
