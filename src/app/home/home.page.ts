import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
slide:boolean=false;
  constructor() {}

  ngOnInit(){

  }
  slideUp(){
    this.slide = true
    console.log(this.slide)
  }
}
