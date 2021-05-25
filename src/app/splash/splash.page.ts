import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.page.html',
  styleUrls: ['./splash.page.scss'],
})
export class SplashPage implements OnInit {

    constructor(private router: Router){}
  
    ngOnInit(){
      this.StartTimer();
    }
  
    StartTimer(){
      setTimeout(()=>{
        this.routing()
      },10000)
  
    }

    routing(){
      this.router.navigate(['home'])
    }
}
