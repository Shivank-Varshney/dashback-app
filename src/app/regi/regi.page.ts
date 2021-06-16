import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from '../service/backend.service';

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
  regiF:FormGroup;
  spNo;
  sp_N;
  s_Obj;
  sponser:boolean = false;
  msg;
  resObj;
  constructor(private fb: FormBuilder, private route: ActivatedRoute, private router: Router, private bs: BackendService) { 
    
  }

  ngOnInit() {
    this.regiForm()
    this.spNo = this.route.snapshot.paramMap.get("mob")
    if(this.spNo == null || this.spNo == '9711855888' || this.spNo == '9354951735' || this.spNo == '7532866802' || this.spNo == '9999509088' || this.spNo == '9555047692'){
      this.regiF.controls['sponsorNo'].setValue('9999509088');
      this.regiF.controls['S_name'].setValue('Dashback');
      this.sponser = false
    }
    else{
      this.bs.checkSpon(this.spNo).subscribe((res)=>{
        this.s_Obj = res
        if(this.s_Obj.err ==0){
          this.sp_N = this.s_Obj.data.name
          this.regiF.controls['sponsorNo'].setValue(this.spNo);
          this.regiF.controls['S_name'].setValue(this.sp_N);
          this.sponser = true;
        }
        else{
          this.sponser = false
          this.regiF.controls['sponsorNo'].setValue('9999509088');
          this.regiF.controls['S_name'].setValue('Dashback');
          this.msg = this.s_Obj.msg
          setTimeout(()=>{
            this.msg = ''
          },5000)
        }
      })
    }
  }
  regiForm(){
    this.regiF = this.fb.group({
      'name': [''],
      'mobile':[''],
      'email':[''],
      'pass':[''],
      'sponsorNo':[{value: '', disabled: true}, Validators.required],
      'S_name':[{value: '', disabled: true}, Validators.required]
    })
  }
  slideUp(){
    this.slide = '90vh'
    this.visible = true
    this.topdist = "5%"
    this.bgimg = "none"
    this.backcolor ="linear-gradient(to right, #37A7E6, #3D54BA)";
  }
  register(){
    let formData = this.regiF.getRawValue()
    let serilize = formData
    this.bs.register(serilize).subscribe((res)=>{
      this.resObj = res
      console.log(this.resObj)
      if(this.resObj.err == 0){
        localStorage.setItem("name",this.resObj.data.name)
        localStorage.setItem("number",this.resObj.data.mobile)
        this.router.navigate(['home'])
      }
      else{
        this.msg = this.resObj.msg
      }
    })
  }
}
