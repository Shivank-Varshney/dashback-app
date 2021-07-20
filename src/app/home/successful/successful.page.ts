
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-successful',
  templateUrl: './successful.page.html',
  styleUrls: ['./successful.page.scss'],
})
export class SuccessfulPage implements OnInit {
type
amt
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get("type");
    this.amt = this.route.snapshot.paramMap.get("amt")
  }

}
