import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  slide = '10vh';
  trans = '1s';
    constructor() {}
  
    slideUp(){
      this.slide = '80vh'
    }
    slideDown(){
      this.slide = '10vh'
    }
}
