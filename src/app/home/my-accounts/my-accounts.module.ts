import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAccountsPageRoutingModule } from './my-accounts-routing.module';

import { MyAccountsPage } from './my-accounts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAccountsPageRoutingModule
  ],
  declarations: [MyAccountsPage]
})
export class MyAccountsPageModule {}
