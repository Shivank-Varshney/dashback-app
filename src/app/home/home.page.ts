import { Component } from '@angular/core';
import { Router } from '@angular/router';

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
big = "big-img";
name = localStorage.getItem("name");
mobile = localStorage.getItem("number")
  constructor(private router : Router) {}

  slideUp(){
    this.outerslide = '88vh';
    this.innerslide = '74vh';
    this.innerpadding = '20px';
    this.big = "small-img";
  }
  slideDown(){
    this.outerslide = '90px';
    this.innerslide = '0vh';
    this.innerpadding = '0px';
    this.big = "big-img";
  }
  logout(){
    localStorage.removeItem("name")
    localStorage.removeItem("number")
    this.router.navigate(['login'])
  }
  social(id){
    if(id === 'fb'){
      window.open('https://www.facebook.com/DashBackIndia');
    }
    if(id === 'insta'){
      window.open('https://www.instagram.com/dashbackindia/');
    }
    if(id === 'whatsapp'){
      
    }
  }
}