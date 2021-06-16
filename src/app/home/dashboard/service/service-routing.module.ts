import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CirclePage } from '../circle/circle.page';

import { ServicePage } from './service.page';

const routes: Routes = [
  {
    path: '',
    component: ServicePage
  },
  {
    path: ':id/:ib/:name/',
    component: CirclePage
  },
  {
    path: 'circle/:{data}',
    loadChildren: () => import('../circle/circle.module').then( m => m.CirclePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServicePageRoutingModule {}
