import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { DummyService } from 'src/app/services/dummy.service';
import { SearchService } from 'src/app/services/search.service';
declare var google: any;

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {

  @ViewChild('map', { static: true }) mapElement: ElementRef;
  map: any;

  latOri = -14.5931473;
  longOri = -56.1224024;

  latDest = -15.5931473;
  longDest = -56.1224024;

  product;

  slideOpts = {
    slidesPerView: 3,
  };

  constructor(private search: SearchService) {
    this.product = this.search.product;
  }

  ngOnInit() {
    this.loadMap();
  }

  loadMap() {

    const latLng = new google.maps.LatLng(-34.9290, 138.6010);

    const mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

}
