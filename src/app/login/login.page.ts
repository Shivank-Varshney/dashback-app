import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  slide = '8vh';
  trans = '1s';
    constructor() {}
  
    slideUp(){
      this.slide = '70vh'
    }
    slideDown(){
      this.slide = '8vh'
    }
}
