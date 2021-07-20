import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.page.html',
  styleUrls: ['./circle.page.scss'],
})
export class CirclePage implements OnInit {
  resObj;
  resData;
  type;
  name;
  oc;
    constructor(private bs: BackendService, private route: ActivatedRoute,private router: Router) { 
      this.type = this.route.snapshot.paramMap.get("ib")
      this.name = this.route.snapshot.paramMap.get("name")
      this.oc = this.route.snapshot.paramMap.get("id")
    }
  
    ngOnInit() {
      this.bs.fetchCircle().subscribe((res)=>{
        this.resObj = res
        this.resData = this.resObj.data
        console.log(res)
      })
    }
    tran(id,name) {
      this.router.navigate(['home/trans/'+this.type+'/'+this.name+'/'+this.oc+'/'+id+'/'+name])
    }

    back(){
      this.router.navigate(["/home/service/"+this.type])
    }
}
