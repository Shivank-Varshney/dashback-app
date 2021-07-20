import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from '../service/backend.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
outerslide = '90px';
outertrans = '1s';
innerslide = '0vh';
innertrans = '1s';
innerpadding = "0px";
big = "big-img";
name = localStorage.getItem("name");
mobile = localStorage.getItem("number")
premData;
premium:boolean= true
  constructor(private router : Router, private bs: BackendService) {}
  
  ngOnInit(){
    this.bs.fetchProfile(this.mobile).subscribe((res)=>{
      this.premData = res
      if(this.premData.data.account_Type == "Premium"){
        this.premium= false
      }
      else{
        this.premium = true
      }
    })
  }
  
  slideUp(){
    this.outerslide = '87vh';
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
    if(id === 'linkedin'){
      window.open('https://www.linkedin.com/company/dash-back/');
    }
    if(id === 'telegram'){
      window.open('https://t.me/dashbackIndia');
    }
    if(id === 'twitter'){
      window.open('https://twitter.com/DashBackIndia')
    }
  }
}