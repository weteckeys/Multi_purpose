import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { PayService } from 'src/app/services/pay.service';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.page.html',
  styleUrls: ['./pay.page.scss'],
})
export class PayPage implements OnInit {

  travel;
  stories;
  constructor(private router: Router, private pay: PayService) {
    this.travel = this.pay.travel;
    this.stories = this.pay.chip;
  }

  ngOnInit() {
    // this.router.navigate(['/login']);
  }
}
