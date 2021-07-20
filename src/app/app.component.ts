import { Component, NgZone, Version } from '@angular/core';
import { Network } from '@ionic-native/network/ngx'
import { AlertController, LoadingController, Platform, ToastController } from '@ionic/angular';
import { SplashScreen } from '@capacitor/splash-screen';
import { StatusBar } from '@capacitor/status-bar'
import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { HttpClient } from '@angular/common/http';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Plugins} from '@capacitor/core';
import { Router } from '@angular/router';
const{App} = Plugins


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
version  
speed;
  constructor(
    private network: Network,
    private alret: AlertController,
    private platform: Platform,
    private toastController: ToastController,
    private orientation: ScreenOrientation,
    private http: HttpClient,
    private broswer: InAppBrowser,
    private zone: NgZone,
    private router: Router,
    private load: LoadingController
    ) {
    this.initializeApp()
  }

  initializeApp(){
    SplashScreen.show({
      showDuration : 1000
    })
    this.platform.ready().then(()=>{
      localStorage.setItem('splash','true');
      this.net()
      this.checkVersion()
      this.orientation.lock(this.orientation.ORIENTATIONS.PORTRAIT);
      StatusBar.setOverlaysWebView({overlay: true})
    })
    // App.addListener('appUrlOpen', (data: any) => {
    //   this.zone.run(() => {
    //       // Example url: https://beerswift.app/tabs/tab2
    //       // slug = /tabs/tab2
    //       // this.toastController.create({
    //       //   message:data.url,
    //       //   duration:2000
    //       // }).then((res)=>{
    //       //   res.present()
    //       // })
    //       const slug = data.url.split(".in").pop();
    //       if (slug) {
    //           this.router.navigateByUrl(slug);
    //       }

    //       // If no match, do nothing - let regular routing
    //       // logic take over
    //   });
    // });
  }

  checkVersion(){
    this.load.create({
      message:`Please wait.... <br>checking Version.....`
    }).then((res)=>{
      res.present()
    })
    return this.http.get('https://backend.dashback.in/checkVer').subscribe((res)=>{
      this.version = res
      this.load.dismiss()
      if(this.version.version !== '1.1.560' ){
        const alert = this.alret.create({
          header: 'Version Alert',
          message: 'You are on lower version. Update to latest version. ',
          buttons:[{
            text: 'Update',
            handler: ()=>{
              window.open('https://bit.ly/3xEs54N')
            }
          }]
        }).then((res)=>{
          setTimeout(()=>{
            res.present()
            this.load.dismiss()
            res.onDidDismiss().then(()=>{
              navigator['app'].exitApp()
            })
          },2000)
        })
      }
      else{
        setTimeout(()=>{
          this.load.dismiss()
        },2000);
      }
    })
  }
   async net(){
     if(this.network.type === 'none'){
        const toast = this.toastController.create({
          message: 'You are Ofline.',
          duration: 2000
        }).then((res)=>{
          res.present();
          this.presentAlert();
        })
     }
     
    let disconnect = await this.network.onDisconnect().subscribe(()=>{
      const toast = this.toastController.create({
        message: 'You are Ofline.',
        duration: 2000
      }).then((res)=>{
        res.present();
        this.presentAlert();
      })
    })
    let connectSubscription = await this.network.onConnect().subscribe(() => {
      setTimeout(() => {
        this.speed = this.network.downlinkMax
        if (this.network.type !== 'none') {
          this.presentToastOn();
        }
      }, 3000);
    });
  }

  async presentAlert(){
    const alert = await this.alret.create({
      cssClass: 'my-custom-class',
      header: 'Network Alert',
      message: 'Not connected to network. Please try again later!!!',
      buttons: [{
        text: 'Ok',
        handler: () => {
          console.log('Confirm Okay');
        }
      }]
    });
    await alert.present();
    await alert.onDidDismiss().then(()=>{
      if(this.network.type === 'none'){
        navigator['app'].exitApp();
      }
      else{
        this.presentToastOn();
      }
    })
  }

  async presentToastOn(){
    const toast = await this.toastController.create({
      message: 'You are Online. ' + this.speed,
      duration: 2000
    })
    await toast.present()
  }
}
