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
small = "";
  constructor() {}

  slideUp(){
    this.outerslide = '88vh';
    this.innerslide = '74vh';
    this.innerpadding = '20px';
    this.small = "small-img";
  }
  slideDown(){
    this.outerslide = '90px';
    this.innerslide = '0vh';
    this.innerpadding = '0px';
    this.small = "";
  }
}