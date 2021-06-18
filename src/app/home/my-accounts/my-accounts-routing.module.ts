import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyAccountsPage } from './my-accounts.page';

const routes: Routes = [
  {
    path: '',
    component: MyAccountsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyAccountsPageRoutingModule {}
