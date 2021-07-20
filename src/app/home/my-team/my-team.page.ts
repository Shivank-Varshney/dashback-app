import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';
// import { setTimeout } from 'timers';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.page.html',
  styleUrls: ['./my-team.page.scss'],
})
export class MyTeamPage implements OnInit {

  mobile = localStorage.getItem("number");
  responseObj
  responseData
  tierView:boolean = true
  tierData;
  tierNo;
  totalVal;
  search:FormGroup
  constructor(private bs:BackendService, private load: LoadingController, private fb: FormBuilder) { }

  ngOnInit() {
    this.load.create({
      message: 'Please wait....'
    }).then((res)=>{
      res.present()
    })
    this.bs.fetchTeam(this.mobile).subscribe((res)=>{
      this.responseObj=res;
      this.responseData=this.responseObj.data;
      console.log(this.responseData)
      this.load.dismiss()
      setTimeout(()=>{
        this.load.dismiss()
      },5000)  
    })
    this.searchForm();
  }

  searchForm(){
    this.search = this.fb.group({
      'search': ['']
    })
  }

  tier(no){
    this.tierView = false;
    this.tierNo = no
    if(no == 1){
      this.tierData = this.responseData.lvl1
      // console.log(this.tierData)
    }
    if(no == 2){
      this.tierData = this.responseData.lvl2
      this.totalVal = 0
      for(let data of this.tierData.earning){
        this.totalVal += data.utility
      }
    }
    if(no == 3){
      this.tierData = this.responseData.lvl3
    }
    if(no == 4){
      this.tierData = this.responseData.lvl4
    }
    if(no == 5){
      this.tierData = this.responseData.lvl5
    }
    if(no == 6){
      this.tierData = this.responseData.lvl6
    }
    if(no == 7){
      this.tierData = this.responseData.lvl7
    }
    if(no == 8){
      this.tierData = this.responseData.lvl8
    }
    if(no == 9){
      this.tierData = this.responseData.lvl9
    }
    if(no == 10){
      this.tierData = this.responseData.lvl10
    }
    if(no == 11){
      this.tierData = this.responseData.lvl11
    }
    if(no == 12){
      this.tierData = this.responseData.lvl12
    }
  }
  back(){
    this.tierView = true
  }
  find(){
    let val = this.search.controls['search'].value
    this.tierData = this.work(val)
    // console.log(result)
  }
  work(val){
    // console.log(val)
    return this.tierData.filter(x => x.name === val)
  }
}
