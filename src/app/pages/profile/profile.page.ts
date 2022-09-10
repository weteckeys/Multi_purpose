import { Component, OnInit } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  allNews;
  constructor(private dummy: DummyService) {
    this.allNews = this.dummy.news;
  }

  ngOnInit() {
  }

}
