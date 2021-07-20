import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdLoadInfo, AdMob, AdMobError, AdMobRewardItem, AdOptions, RewardAdPluginEvents } from '@capacitor-community/admob';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {
adF:FormGroup
name= localStorage.getItem('name')
mobile= localStorage.getItem('number')
tranData;
trans:boolean=false
countObj;
countData;
last;
balObj;
balAmt;
reward;
  constructor(private toast: ToastController, private loader: LoadingController,private alertC: AlertController, private bs: BackendService, private fb: FormBuilder,
              private router: Router ) { }

  ngOnInit() {
    this.adForm()
    this.fetchCount()
    this.fetchBal()
  }
  add(){
    this.router.navigate(['/home/addMoney'])
  }
  adForm(){
    this.adF = this.fb.group({
      'name': this.name,
      'mobile': this.mobile,
      'time': ['']
    })
  }
  async ad(){
    
    this.alertC.create({
      header:'Notice',
      subHeader:'Ad Beta Notice.',
      message:'This is beta version of Ad cashback system. Press continue if still want to watch Ad.',
      buttons:[
        {
          text:'Cancel',
          role: 'Cancel'
        },
        {
          text:'Continue',
          handler: ()=>{
            let date = Date.now() 
            this.fetchCount()
            let last1 = Date.parse(this.last)
            const dif = date -last1
            const min = dif/ (1000 * 60) % 60;
            console.log(min)
            if(min >= 1){
              this.watchAd()
            }
            else{
              this.alertC.create({
                header: 'Cool Down Time',
                message:'You need wait for 1 min. from your last Ad.',
                buttons:['OK']
              }).then((res)=>{
                res.present()
              })
            }
          }
        }
      ]
    }).then((res)=>{
      res.present()
    })
  }
  async watchAd(){
    this.loader.create({
      message:"Please wait loading Ad...."
    }).then((res)=>{
      res.present();
    })

    AdMob.initialize({
      requestTrackingAuthorization: true,
      testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
      initializeForTesting: true,
    });

    AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared rewardVideo
      // console.log(info.adUnitId)
    });
    
    AdMob.addListener(RewardAdPluginEvents.FailedToLoad, (info: AdMobError)=>{
      this.loader.dismiss()
      this.alertC.create({
        header:'Ad View Error',
        message:'Error occured please try again later!!! ' + info.message,
        buttons:['OK']
      }).then((res)=>{
        res.present();
      })
    })
    
    AdMob.addListener(RewardAdPluginEvents.Rewarded, (rewardItem: AdMobRewardItem) => {
      // Subscribe user rewarded
      console.log(rewardItem.type);
      this.toast.create({
        message:'Rewarded 0.25 points ',
        duration:10000
      }).then((res)=>{
        res.present()
        this.adTrans()
      })
    });

    
    // AdMob.addListener(eventName: RewardAdPluginEvents.FailedToLoad, listenerFunc: (error: AdMobError) => void) => PluginListenerHandle
    const options: AdOptions = {
      adId: 'ca-app-pub-9952398115191643/6920658961',
      // isTesting: true
      // npa: true,
      // autoShowReward: false
    };
    
    await AdMob.prepareRewardVideoAd(options);
    const rewardItem = await AdMob.showRewardVideoAd().then(()=>{
      this.loader.dismiss();
      this.trans= true;
    });

    
    
  }

  adTrans(){
    if(this.trans == true){
      this.trans = false
      let date = Date.now()
        this.adF.controls['time'].setValue(date);
        let formData = this.adF.getRawValue()
        let serilize = formData
        this.bs.adTran(serilize).subscribe((res)=>{
          this.tranData = res
          this.toast.create({
            message: this.tranData.msg,
            duration: 5000
          }).then((res)=>{
            res.present()
            
          this.fetchCount()
          this.fetchBal()
          })
        })
    }
  }

   async fetchCount(){
    this.bs.adCount(this.mobile).subscribe((res)=>{
       this.countObj = res
      this.countData = this.countObj.data
      this.last = this.countData.lastAd
      console.log(this.countData)
    })
  }

  async fetchBal(){
    this.bs.fetchBal(this.mobile).subscribe((res)=>{
      this.balObj = res
      console.log(this.balObj)
      this.balAmt = this.balObj.data.walletBal
      this.reward = this.balObj.data.reward
    })
  }
}
