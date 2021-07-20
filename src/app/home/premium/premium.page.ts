import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-premium',
  templateUrl: './premium.page.html',
  styleUrls: ['./premium.page.scss'],
})
export class PremiumPage implements OnInit {
resData;
mobile = localStorage.getItem("number")
  constructor(private bs: BackendService, private alertCrt: AlertController, private load: LoadingController, private router: Router) { }

  ngOnInit() {
  }

  premium(){
    this.load.create({
      message:'Please wait....'
    }).then((res)=>{
      res.present()
    })
    this.bs.premium(this.mobile).subscribe((res)=>{
      this.resData = res
      if(this.resData.err == 0){
        this.load.dismiss()
        this.alertCrt.create({
          header:'Congrats',
          message:'Congratulations you are now a Premium member.',
          buttons:[
            {
              text:'Ok',
              handler:()=>{
                this.router.navigate(['/home/dash'])
              }
            }
          ]
        }).then((res)=>{
          res.present()
        })
      }
      if(this.resData.err == 2){
        this.load.dismiss()
        this.alertCrt.create({
          header:'Error',
          message:this.resData.msg,
          buttons:[
            {
              text:'Cancel',
              handler:()=>{
                this.router.navigate(['/home/dash']);
              }
            },
            {
              text:'Add Money',
              handler:()=>{
                this.router.navigate(['/home/addMoney']);
              }
            }
          ]
        }).then((res)=>{
          res.present()
          this.load.dismiss()
        })
      }
      if(this.resData.err == 1){
        setTimeout(()=>{
          this.load.dismiss()
          this.alertCrt.create({
            header:'Error',
            message:this.resData.msg,
            buttons:['Ok']
          }).then((res)=>{
            res.present()
          })
        },1000)
      }
    })
  }
}
