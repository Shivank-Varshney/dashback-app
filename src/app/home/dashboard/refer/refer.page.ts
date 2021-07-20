import { Component, OnInit } from '@angular/core';
import { Clipboard } from '@ionic-native/clipboard/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-refer',
  templateUrl: './refer.page.html',
  styleUrls: ['./refer.page.scss'],
})
export class ReferPage implements OnInit {
id= localStorage.getItem('id')
link=""
  constructor(private clip: Clipboard, private toast: ToastController) {
    this.link ="https://www.dashback.in/register/"+this.id
   }

  ngOnInit() {
  }
  copy(){
    this.clip.copy(this.link)
    this.toast.create({
      message: 'Link copied....',
      duration: 3000,
    }).then((res)=>{
      res.present()
    })
  }
}
