import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  search:FormGroup
    constructor(private route: ActivatedRoute, private router: Router, private bs: BackendService, private fb: FormBuilder) { 
      this.type = this.route.snapshot.paramMap.get("id")
    }
  
    ngOnInit() {
      
      this.fetch()
      this.searchForm()
      this.search.reset()
    }

    searchForm(){
      this.search = this.fb.group({
        'search': ['']
      })
    }

    fetch(){
      this.bs.fetchService(this.type).subscribe((res)=>{
        this.resObj = res
        this.resData = this.resObj.data
      })
    }

    circle(id,name){
      let data = {'name':name,'id':id,'type':this.type}
      this.router.navigate(['home/circle/'+this.type+'/'+id+'/'+name]);
    }
    find(){
      let val = this.search.controls['search'].value
      if(val == null){
        this.fetch()
      }
      else{
        this.resData = this.work(val)

      }
      // console.log(result)
    }
    work(val){
      // console.log(val)
      return this.resData.filter(x => x.operator_Name.toLowerCase() == val.toLowerCase())
    }
}
