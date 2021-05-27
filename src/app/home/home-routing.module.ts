import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommComponent } from './e-comm/e-comm.component';
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
       component: DashboardComponent
     },
     {
       path:'more',
       component: MoreComponent
     },
     {
       path:'eComm',
       component: ECommComponent
     },
     {
       path:'wallet',
       component: WalletComponent
     },
     {
       path:'history',
       component: HistoryComponent
     }
   ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
