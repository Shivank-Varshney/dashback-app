import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-my-team',
  templateUrl: './my-team.page.html',
  styleUrls: ['./my-team.page.scss'],
})
export class MyTeamPage implements OnInit {

  mobile = localStorage.getItem("number");
  responseObj
  responseData
  constructor(private bs:BackendService) { }

  ngOnInit() {
    this.bs.fetchTeam(this.mobile).subscribe((res)=>{
      this.responseObj=res;
      this.responseData=this.responseObj.data;
      console.log(this.responseData);
    })
  }

}
