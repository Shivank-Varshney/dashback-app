import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

  constructor(private router: Router) { 
    let splash = localStorage.getItem('splash');
    if(splash === 'false'){
      router.navigate(['home']);
    }
  }

  ngOnInit(){
    this.StartTimer();
  }

  StartTimer(){
    setTimeout(()=>{
      this.routing()
    },3500)

  }

  routing(){
    localStorage.setItem('splash','false');
    this.router.navigate(['home'])
  }

}
