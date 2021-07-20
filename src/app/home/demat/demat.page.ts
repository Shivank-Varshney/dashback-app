import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demat',
  templateUrl: './demat.page.html',
  styleUrls: ['./demat.page.scss'],
})
export class DematPage implements OnInit {
Demat: FormGroup
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.dematForm()
  }

  dematForm(){
    this.Demat = this.fb.group({
      'mobile':[''],
      'name':[''],
      'email':[''],
      'dob':[''],
      'gender':[''],
      'maritalStatus':[''],
      'occupation':[''],
      'otherOcc':[''],
      'income':[''],
      'address':[''],
      'city':[''],
      'state':[''],
      'pass':['']
    })
  }
}
