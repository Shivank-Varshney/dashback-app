import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DematPageRoutingModule } from './demat-routing.module';

import { DematPage } from './demat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    DematPageRoutingModule
  ],
  declarations: [DematPage]
})
export class DematPageModule {}
