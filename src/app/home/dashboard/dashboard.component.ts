import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router, private bs: BackendService) { }

  ngOnInit() {}

  service(type){
    // console.log(type)
    this.router.navigate(['home/service/'+type])
  }
  money(page){
    this.router.navigate(['home/'+page])
  }
}
