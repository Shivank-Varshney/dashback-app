import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-accounts',
  templateUrl: './my-accounts.page.html',
  styleUrls: ['./my-accounts.page.scss'],
})
export class MyAccountsPage implements OnInit {
Account = "113001504967"
IFSC ="ICIC0001130"
Name = "Hardcipher Private Limited"
  constructor() { }

  ngOnInit() {
  }

}
