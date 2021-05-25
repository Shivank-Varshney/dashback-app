import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
slide = '15vh';
trans = '1s';
  constructor() {}

  slideUp(){
    this.slide = '90vh'
  }
}
