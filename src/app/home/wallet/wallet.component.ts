import { Component, OnInit } from '@angular/core';
import { AdLoadInfo, AdMob, AdMobRewardItem, AdOptions, RewardAdPluginEvents } from '@capacitor-community/admob';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.scss'],
})
export class WalletComponent implements OnInit {

  constructor(private toast: ToastController) { }

  ngOnInit() {}

  async ad(){

    AdMob.initialize({
      requestTrackingAuthorization: true,
      testingDevices: ['2077ef9a63d2b398840261c8221a0c9b'],
      initializeForTesting: true,
    });

    AdMob.addListener(RewardAdPluginEvents.Loaded, (info: AdLoadInfo) => {
      // Subscribe prepared rewardVideo
      console.log(info)
    });
  
    AdMob.addListener(RewardAdPluginEvents.Rewarded, (rewardItem: AdMobRewardItem) => {
      // Subscribe user rewarded
      console.log(rewardItem);
      this.toast.create({
        message:'Rewarded' + rewardItem,
        duration:10000
      }).then((res)=>{
        res.present()
      })
    });
    
    // AdMob.addListener(eventName: RewardAdPluginEvents.FailedToLoad, listenerFunc: (error: AdMobError) => void) => PluginListenerHandle
    const options: AdOptions = {
      adId: 'ca-app-pub-9952398115191643/6920658961',
      // isTesting: true
      npa: true,
      // autoShowReward: false
    };

    
    await AdMob.prepareRewardVideoAd(options);
    const rewardItem = await AdMob.showRewardVideoAd();
    // AdMob.
  }

}
