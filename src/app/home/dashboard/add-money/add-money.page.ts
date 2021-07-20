import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { AlertController, ToastController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.page.html',
  styleUrls: ['./add-money.page.scss'],
})
export class AddMoneyPage implements OnInit {
addM: FormGroup
mobile = localStorage.getItem("number")
name = localStorage.getItem("name")
resData;
  constructor(private webIntenet: WebIntent, private toast: ToastController, private fb: FormBuilder, 
              private Alret: AlertController,private bs: BackendService, private router: Router) { }

  ngOnInit() {
    this.addForm();
  }

  addForm(){
    this.addM = this.fb.group({
      'amt':['', Validators.required,],
      'mobile':this.mobile,
      'name': this.name
    })
  }

  upi(){
    let amount = this.addM.controls['amt'].value;
    const tid = this.getRandomString();
    const orderId = this.getRandomString();
    const totalPrice = amount;
    const UPI_ID = 'open.2000211575@icici';
    const UPI_NAME = 'Hardcipher Private Limited';
    const UPI_TXN_NOTE = 'Dashback Wallet Recharge';
    // tslint:disable-next-line: max-line-length
    let uri = `upi://pay?pa=${UPI_ID}&pn=${UPI_NAME}&tid=${tid}&am=${totalPrice}&cu=INR&tn=${UPI_TXN_NOTE}&tr=${orderId}`;
    uri = uri.replace(' ', '+');
    (window as any).plugins.intentShim.startActivityForResult(
      {
        action: this.webIntenet.ACTION_VIEW,
        url: uri,
        requestCode: 1
      }, intent => {
        if (intent.extras.requestCode === 1 &&
            intent.extras.resultCode === (window as any).plugins.intentShim.RESULT_OK &&
            intent.extras.Status &&
            (((intent.extras.Status as string).toLowerCase()) === ('success'))) {
              // console.log(intent.extras)
              // let a = intent.extras.UTR
              // let b = intent.extras
          this.paymentSuccess(orderId, 'UPI');
        } else {
          alert('payment failed');
        }
      }, err => {
        alert('error ' + err);
      });
  }

  getRandomString() {
    const len = 10;
    const arr = '1234567890asdfghjklqwertyuiopzxcvbnmASDFGHJKLQWERTYUIOPZXCVBNM';
    let ans = '';
    for (let i = len; i > 0; i--) {
        ans += arr[Math.floor(Math.random() * arr.length)];
    }
    return ans;
  }

  paymentSuccess(orderId: string, paymentMethod: string) {
    alert(`Payment successful Order Id ${orderId} payment method ${paymentMethod}`);
    this.add();
  }

  add(){
    let formData = this.addM.getRawValue()
    let serilize = formData
    this.bs.addWalletAmount(serilize).subscribe((res)=>{
      this.resData = res
      console.log(res)
      if(this.resData.err == 0){
        let type = "Funds successfully added."
        let amt = serilize.amt
        this.router.navigate(['/home/successful/'+type+'/'+amt])
      }
    })
  }
}
