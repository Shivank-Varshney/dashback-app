import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { Network } from '@ionic-native/network/ngx';
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { CommonModule } from '@angular/common';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { AdMob } from '@capacitor-community/admob';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, ReactiveFormsModule, HttpClientModule, CommonModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, Network, ScreenOrientation, InAppBrowser, WebIntent],
  bootstrap: [AppComponent],
})
export class AppModule {}
