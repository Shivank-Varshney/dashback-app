import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcommComponent } from './ecomm/ecomm.component';
import { HistoryComponent } from './history/history.component';
import { HomePage } from './home.page';
import { MoreComponent } from './more/more.component';
import { WalletComponent } from './wallet/wallet.component';
import { ComingSoonPage } from './coming-soon/coming-soon.page';

const routes: Routes = [
  {
    path: 'comingsoon',
    component: ComingSoonPage
  },
  {
    path: '',
    component: HomePage,
    children:[
      {
        path:'dash',
        component:DashboardComponent,
        children:[
          {
            path:''
          },
        ]
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
      },
    ]
  },
  {
    path:'service/:id',
    loadChildren: () => import('./dashboard/service/service.module').then(m => m.ServicePageModule),
  },
  {
    path: 'circle/:ib/:id/:name',
    loadChildren: () => import('./dashboard/circle/circle.module').then( m => m.CirclePageModule)
  },
  {
    path: 'trans/:ib/:id/:name/:cc/:cn',
    loadChildren: () => import('./dashboard/trans/trans.module').then( m => m.TransPageModule)
  },
  {
    path: 'addMoney',
    loadChildren: () => import('./dashboard/add-money/add-money.module').then( m => m.AddMoneyPageModule)
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./coming-soon/coming-soon.module').then( m => m.ComingSoonPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
