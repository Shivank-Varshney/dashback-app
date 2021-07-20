import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {
  mobile= localStorage.getItem("number")
  resObj
  resData
  constructor(private bs: BackendService, private load: LoadingController) { }

  ngOnInit() {
    this.fetch()
  }

  async fetch(){
    this.load.create({
      message:'Loading....'
    }).then((resp)=>{
      resp.present()
    })
    this.bs.fetchTran(this.mobile).subscribe((res)=>{
      this.resObj = res
      this.resData = this.resObj.data
      this.load.dismiss()
      // console.log(this.resData)
      setTimeout(()=>{
        this.load.dismiss()
      },5000)
    })
  }
}
