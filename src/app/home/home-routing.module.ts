import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EcommComponent } from './ecomm/ecomm.component';
import { HomePage } from './home.page';
import { MoreComponent } from './more/more.component';
import { WalletComponent } from './wallet/wallet.component';
import { ComingSoonPage } from './coming-soon/coming-soon.page';

const routes: Routes = [
  // {
  //   path: 'comingsoon',
  //   component: ComingSoonPage
  // },
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
      }
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
    path: 'trans/:ib/:name/:id/:cc/:cn',
    loadChildren: () => import('./dashboard/trans/trans.module').then( m => m.TransPageModule)
  },
  {
    path: 'addMoney',
    loadChildren: () => import('./dashboard/add-money/add-money.module').then( m => m.AddMoneyPageModule)
  },
  {
    path: 'coming-soon',
    loadChildren: () => import('./coming-soon/coming-soon.module').then( m => m.ComingSoonPageModule)
  },
  {
    path: 'my-team',
    loadChildren: () => import('./my-team/my-team.module').then( m => m.MyTeamPageModule)
  },
  {
    path: 'my-accounts',
    loadChildren: () => import('./my-accounts/my-accounts.module').then( m => m.MyAccountsPageModule)
  },
  {
    path: 'kyc',
    loadChildren: () => import('./kyc/kyc.module').then( m => m.KycPageModule)
  },
  {
    path: 'change-password',
    loadChildren: () => import('./change-password/change-password.module').then( m => m.ChangePasswordPageModule)
  },
  {
    path: 'app-lock',
    loadChildren: () => import('./app-lock/app-lock.module').then( m => m.AppLockPageModule)
  },
  {
    path: 'policies',
    loadChildren: () => import('./policies/policies.module').then( m => m.PoliciesPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'add-money',
    loadChildren: () => import('./wallet/add-money/add-money.module').then( m => m.AddMoneyPageModule)
  },
  {
    path: 'withdraw',
    loadChildren: () => import('./wallet/withdraw/withdraw.module').then( m => m.WithdrawPageModule)
  },
  {
    path: 'help-and-support',
    loadChildren: () => import('./help-and-support/help-and-support.module').then( m => m.HelpAndSupportPageModule)
  },
  {
    path: 'refer',
    loadChildren: () => import('./dashboard/refer/refer.module').then( m => m.ReferPageModule)
  },
  {
    path: 'send-money',
    loadChildren: () => import('./dashboard/send-money/send-money.module').then( m => m.SendMoneyPageModule)
  },
  {
    path: 'request-money',
    loadChildren: () => import('./dashboard/request-money/request-money.module').then( m => m.RequestMoneyPageModule)
  },
  {
    path: 'history',
    loadChildren: () => import('./history/history.module').then( m => m.HistoryPageModule)
  },  {
    path: 'successful',
    loadChildren: () => import('./successful/successful.module').then( m => m.SuccessfulPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'premium',
    loadChildren: () => import('./premium/premium.module').then( m => m.PremiumPageModule)
  }






];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
