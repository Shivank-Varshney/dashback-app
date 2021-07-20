import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { BackendService } from 'src/app/service/backend.service';

@Component({
  selector: 'app-trans',
  templateUrl: './trans.page.html',
  styleUrls: ['./trans.page.scss'],
})
export class TransPage implements OnInit {
type;
operator;
operatorCode;
circleName;
circleCode;
transaction:FormGroup
OpData;
opName;
rechData;
Mobile = localStorage.getItem("number");
Name = localStorage.getItem("name");
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private alert: AlertController,
               private bs: BackendService, private router: Router, private load: LoadingController) { 
    this.type = this.route.snapshot.paramMap.get("ib");
    this.operator = this.route.snapshot.paramMap.get("name");
    this.operatorCode = this.route.snapshot.paramMap.get("id");
    this.circleName = this.route.snapshot.paramMap.get("cn");
    this.circleCode = this.route.snapshot.paramMap.get("cc")
  }

  ngOnInit() {
    this.transForm()
    this.fetchOpDet()
  }
  transForm(){
    this.transaction = this.fb.group({
      'operatorCode':[this.operatorCode],
      'circleCode': [this.circleCode],
      'operator':[{'value':this.operator,'disabled':true},Validators.required],
      'circle':[{'value':this.circleName,'disabled':true},Validators.required],
      'number':['',Validators.required],
      'amt':['',Validators.required],
      'accNo':this.Mobile,
      'accName': this.Name
    })
  }
  proceed(){
    this.load.create({
      message:'Please Wait....'
    }).then((res)=>{
      res.present()
    })
    let formData = this.transaction.getRawValue()
    let serilize = formData
    this.bs.recharge(serilize).subscribe((res)=>{
      this.rechData = res
      console.log(this.rechData)
      if(this.rechData.err == 0){
        let type = "Recharge Successful"
        this.load.dismiss();
        this.router.navigate(['/home/successful/'+type+"/"+serilize.amt])        
      }
      if(this.rechData.err == 2){
        this.load.dismiss();
        this.alert.create({
          message: this.rechData.msg,
          buttons:[
            {
              text:'Cancel',
              handler:()=>{
                this.router.navigate(['/home/dash']);
              }
            },
            {
              text:'Add Money',
              handler:()=>{
                this.router.navigate(['/home/addMoney']);
              }
            }
          ]
        }).then((res)=>{
          res.present()
        })
      }
      else{
        this.load.dismiss();
        this.alert.create({
          message:this.rechData.msg,
          buttons:[
            {
              text:'Cancel',
              handler:()=>{
                this.router.navigate(['/home/dash'])
              }
            }
          ]
        }).then((res)=>{
          res.present()
        })
      }
    })

  }
  fetchOpDet(){
    let fromData = this.transaction.getRawValue()
    let serilize = fromData
    this.bs.fetOpDet(serilize).subscribe((res)=>{
      this.OpData = res
      if(this.OpData.err == 0){
        this.opName = this.OpData.data.account_Display
      }
    })
  }
}
