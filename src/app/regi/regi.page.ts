import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-regi',
  templateUrl: './regi.page.html',
  styleUrls: ['./regi.page.scss'],
})
export class RegiPage implements OnInit {
  slide = '8vh';
  trans = '1s';
  topdist = "50%";
  bgimg = "linear-gradient(to right, #37A7E6, #3D54BA)";
  backcolor ="linear-gradient(to right, #D8E5ED, #D8E5ED)";
  visible = false;
  regiF:FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.regiForm()
  }
  regiForm(){
    this.regiF = this.fb.group({
      'name': [''],
      'mobile':[''],
      'email':[''],
      'pass':[''],
      'rePass':[''],
      'sponsorNo':[''],
      'S_name':['']
    })
  }
  slideUp(){
    this.slide = '90vh'
    this.visible = true
    this.topdist = "5%"
    this.bgimg = "none"
    this.backcolor ="linear-gradient(to right, #37A7E6, #3D54BA)";
  }
}
