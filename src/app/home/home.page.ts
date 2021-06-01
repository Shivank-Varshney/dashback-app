import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
outerslide = '90px';
outertrans = '1s';
innerslide = '0vh';
innertrans = '1s';
innerpadding = "0px";
  constructor() {}

  slideUp(){
    this.outerslide = '90vh';
    this.innerslide = '74vh';
    this.innerpadding = '20px';
  }
}