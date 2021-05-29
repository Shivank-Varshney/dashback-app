import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
outerslide = '15vh';
outertrans = '1s';
innerslide = '0vh';
innertrans = '1s';
  constructor() {}

  slideUp(){
    this.outerslide = '90vh'
    this.innerslide = '75vh'
  }
}