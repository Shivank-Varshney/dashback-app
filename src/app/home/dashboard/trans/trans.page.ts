import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';

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
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private alert: AlertController) { 
    this.type = this.route.snapshot.paramMap.get("ib");
    this.operator = this.route.snapshot.paramMap.get("name");
    this.operatorCode = this.route.snapshot.paramMap.get("id");
    this.circleName = this.route.snapshot.paramMap.get("cn");
    this.circleCode = this.route.snapshot.paramMap.get("cc")
  }

  ngOnInit() {
    this.transForm()
  }
  transForm(){
    this.transaction = this.fb.group({
      'operatorCode':[this.operatorCode],
      'circleCode': [this.circleCode],
      'operator':[{'value':this.operator,'disabled':true},Validators.required],
      'circle':[{'value':this.circleName,'disabled':true},Validators.required],
      'number':['',Validators.required],
      'amt':['',Validators.required]
    })
  }
  proceed(){
    let formData = this.transaction.getRawValue()
    let serilize = formData
    console.log(serilize)
    this.alert.create({
      message:`mobile is ${serilize.number} operator code is ${serilize.operatorCode} operator is ${serilize.operator} circle is ${serilize.circle} cicrle code is ${serilize.circleCode} amount is ${serilize.amt}`,
      buttons:['OK']
    }).then((res)=>{
      res.present()
    })
  }
}
