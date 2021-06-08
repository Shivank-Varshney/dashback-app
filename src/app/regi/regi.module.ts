import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegiPageRoutingModule } from './regi-routing.module';

import { RegiPage } from './regi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegiPage]
})
export class RegiPageModule {}
