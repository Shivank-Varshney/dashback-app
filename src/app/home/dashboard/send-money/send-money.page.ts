import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-send-money',
  templateUrl: './send-money.page.html',
  styleUrls: ['./send-money.page.scss'],
})
export class SendMoneyPage implements OnInit {
search:FormGroup
transfer:FormGroup
searchObj;
searchData;
trans:boolean = false;
transferObj;
transferData;
  constructor(private fb: FormBuilder, private bs: BackendService, private Alert: AlertController, private load: LoadingController, private router: Router) { }

  ngOnInit() {
    this.searchForm()
    this.transferForm()
    this.search.reset()
  }
  searchForm(){
    this.search = this.fb.group({
      'mobile':['',Validators.required]
    })
  }
  transferForm(){
    this.transfer = this.fb.group({
      'name': localStorage.getItem("name"),
      'mobile': localStorage.getItem("number"),
      'toMobile':[''],
      'toName':[''],
      'amt':['',Validators.required]
    })
  }
  searchNum(){
    let mobile = this.search.controls['mobile'].value
    // console.log(mobile)
    let myMobile = localStorage.getItem("number");
    if(mobile == myMobile || mobile === myMobile){
      this.Alert.create({
        header: "Error",
        message:"Mobile number cannot be your number",
        buttons:['Try again']
      }).then((res)=>{
        res.present()
      })
    }
    else{
      this.bs.fetchbyNum(mobile).subscribe((res)=>{
        this.load.create({
          message:'Please wait searching....'
        }).then((res)=>{
          res.present()
        })
        this.searchObj = res
        this.searchData = this.searchObj.data
        if(this.searchObj.err == 1 || this.searchObj.err == 2){
          this.Alert.create({
            header:'Error',
            message: this.searchObj.msg,
            buttons:['Try again']
          }).then((res)=>{
            setTimeout(()=>{
              res.present();
              this.load.dismiss();
            },2000)
          })
        }
        else{
          setTimeout(()=>{
            this.load.dismiss();
            this.trans = true
          },2000)
        }
      })
    }
  }
  fundTransfer(){
    let name = localStorage.getItem('name');
    let mobile = localStorage.getItem('number');
    this.load.create({
      message:'Please wait....'
    }).then((res)=>{
      res.present()
    })
    this.transfer.controls['toMobile'].setValue(this.searchData.mobile);
    this.transfer.controls['toName'].setValue(this.searchData.name);
    this.transfer.controls['mobile'].setValue(mobile);
    this.transfer.controls['name'].setValue(name);
    let formData = this.transfer.getRawValue()
    let serilize = formData
    this.bs.fundTransfer(serilize).subscribe((res)=>{
        this.transferObj = res
        if(this.transferObj.err == 1){
          this.Alert.create({
            header:'Error',
            message:this.transferObj.msg,
            buttons:['Try again']
          }).then((res)=>{
            setTimeout(()=>{
              res.present()
              this.load.dismiss()
            },2000)
          })
        }
        if(this.transferObj.err == 2){
          this.Alert.create({
            header:'Funds Error',
            message:this.transferObj.msg,
            buttons:[
              {
                text:'Add Funds',
                handler:()=>{
                  this.search.reset();
                  this.transfer.reset();
                  this.trans = false;
                  this.router.navigate(['/home/addMoney']);
                }
              },
              {
                text:'Cancel',
                handler:()=>{
                  this.search.reset();
                  this.transfer.reset();
                  this.trans = false;
                  this.router.navigate(['/home/dash']);
                }
              }
            ]
          }).then((res)=>{
            setTimeout(()=>{
              res.present();
              this.load.dismiss();
              res.onDidDismiss().then(()=>{
                  this.search.reset();
                  this.transfer.reset();
                  this.trans = false;
                  this.router.navigate(['/home/addMoney']);
              })
            })
          })
        }
        else{
          setTimeout(()=>{
            this.load.dismiss()
            this.search.reset();
            this.transfer.reset();
            this.trans = false;
            let type =`Funds successfully transferred to ${serilize.toName}`
            let amt = `${serilize.amt}`
            this.router.navigate(['/home/successful/'+type+'/'+amt])
          },2000);
        }
    })
  }
}
