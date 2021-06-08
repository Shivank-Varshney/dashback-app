import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
slide = '8vh';
trans = '1s';
topdist = "50%";
bgimg = "linear-gradient(to right, #37A7E6, #3D54BA)";
backcolor ="linear-gradient(to right, #D8E5ED, #D8E5ED)";
visible = false;
mobF:FormGroup
  constructor(private router: Router, private fb: FormBuilder) { }

  ngOnInit() {
    this.loginF()
  }
  loginF(){
    this.mobF = this.fb.group({
      'mobile':[''],
      'pass':['']
    })
  }
  slideUp(){
    this.slide = '90vh'
    this.visible = true
    this.topdist = "5%"
    this.bgimg = "none"
    this.backcolor ="linear-gradient(to right, #37A7E6, #3D54BA)";
  }
  regi(){
    this.router.navigate(['regi'])
  }
}
