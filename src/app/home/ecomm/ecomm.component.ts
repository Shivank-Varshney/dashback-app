import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecomm',
  templateUrl: './ecomm.component.html',
  styleUrls: ['./ecomm.component.scss'],
})
export class EcommComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  slider(slide){
    slide.startAutoplay();
  }

  nav(){
    this.router.navigate(['/home/coming-soon'])
  }
}
