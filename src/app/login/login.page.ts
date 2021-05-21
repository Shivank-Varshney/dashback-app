import { Component, OnInit } from '@angular/core';
import { BackendService } from '../service/backend.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
resData;
resObj
  constructor(private bs : BackendService) { }

  ngOnInit() {
    this.bs.test().subscribe((res)=>{
      this.resData = res
      this.resObj = this.resData.msg
      console.log(res)
    })
  }

}
