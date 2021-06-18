import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecomm',
  templateUrl: './ecomm.component.html',
  styleUrls: ['./ecomm.component.scss'],
})
export class EcommComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  slider(slide){
    slide.startAutoplay();
  }

}
