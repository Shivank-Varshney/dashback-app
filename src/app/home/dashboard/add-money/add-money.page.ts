import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebIntent } from '@ionic-native/web-intent/ngx';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-add-money',
  templateUrl: './add-money.page.html',
  styleUrls: ['./add-money.page.scss'],
})
export class AddMoneyPage implements OnInit {
addM: FormGroup
  constructor(private webIntenet: WebIntent, private toast: ToastController, private fb: FormBuilder, private Alret: AlertController) { }

  ngOnInit() {
    this.addForm();
  }

  addForm(){
    this.addM = this.fb.group({
      'amt':['0', Validators.required]
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
  }
}
