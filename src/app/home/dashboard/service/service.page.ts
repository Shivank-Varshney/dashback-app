import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.page.html',
  styleUrls: ['./service.page.scss'],
})
export class ServicePage implements OnInit {
  type;
  resObj;
  resData;
    constructor(private route: ActivatedRoute, private router: Router, private bs: BackendService) { 
      this.type = this.route.snapshot.paramMap.get("id")
    }
  
    ngOnInit() {
      this.bs.fetchService(this.type).subscribe((res)=>{
        this.resObj = res
        this.resData = this.resObj.data
      })
    }

    circle(id,name){
      let data = {'name':name,'id':id,'type':this.type}
      this.router.navigate(['home/circle/'+this.type+'/'+id+'/'+name]);
    }
}
