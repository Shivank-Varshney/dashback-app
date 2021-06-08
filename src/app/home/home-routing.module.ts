import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcommComponent } from './ecomm/ecomm.component';
import { HistoryComponent } from './history/history.component';
import { HomePage } from './home.page';
import { MoreComponent } from './more/more.component';
import { WalletComponent } from './wallet/wallet.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'dash',
        component:DashboardComponent
      },
      {
        path:'more',
        component:MoreComponent
      },
      {
        path:'eComm',
        component:EcommComponent
      },
      {
        path:'wallet',
        component:WalletComponent
      },
      {
        path:'history',
        component:HistoryComponent
      }
    ]
  },
  {
    path: 'service',
    loadChildren: () => import('./dashboard/service/service.module').then( m => m.ServicePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
