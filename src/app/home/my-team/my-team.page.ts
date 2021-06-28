import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';

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
  constructor(private bs:BackendService, private load: LoadingController) { }

  ngOnInit() {
    // this.load.create({
    //   message: 'Please wait....'
    // }).then((res)=>{
    //   res.present()
    // })
    this.bs.fetchTeam(this.mobile).subscribe((res)=>{
      this.responseObj=res;
      this.responseData=this.responseObj.data;
      this.load.dismiss()
    })
  }

  tier(no){
    this.tierView = false;
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
}
