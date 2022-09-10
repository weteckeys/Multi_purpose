import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  clinic = [
    {
      img : 'assets/imgs/search/1.jpg',
      name : 'Pets Care Clinic',
      km : '2.4'
    },
    {
      img : 'assets/imgs/search/2.jpg',
      name : 'Emergency Hospital',
      km : '3.4'
    },
    {
      img : 'assets/imgs/search/3.jpg',
      name : 'New Dental Care',
      km : '4.0'
    },
    {
      img : 'assets/imgs/search/4.jpg',
      name : 'Parivar Health Center',
      km : '2.0'
    },
    {
      img : 'assets/imgs/search/5.jpg',
      name : 'Sahyog Hostipal',
      km : '1.5'
    },
    {
      img : 'assets/imgs/search/6.jpg',
      name : 'Parivar Clinic',
      km : '2.4'
    }
  ];



  product = [
    {
      img : 'assets/imgs/search/m1.jpg',
      name : 'New City Point Restaurant',
    },
    {
      img : 'assets/imgs/search/m2.jpg',
      name : 'Red Chilly restaurant',
    },
    {
      img : 'assets/imgs/search/m3.jpg',
      name : 'Shreeji Cack shop',
    },
    {
      img : 'assets/imgs/search/m4.jpg',
      name : 'Kargil food camp',
    },
    {
      img : 'assets/imgs/search/m5.jpg',
      name : 'Gallops Food Plaza',
    },
    {
      img : 'assets/imgs/search/m6.jpg',
      name : 'Shalimar Restaurant',
    },
    {
      img : 'assets/imgs/search/m7.jpg',
      name : 'Super Ice Cream',
    },
    {
      img : 'assets/imgs/search/m8.jpg',
      name : 'Amul Ice Cream',
    },
    {
      img : 'assets/imgs/search/m9.jpg',
      name : 'Himaliya Ice Cream',
    },
    {
      img : 'assets/imgs/search/m10.jpg',
      name : 'Dilbahar Ice Cream',
    },
    {
      img : 'assets/imgs/search/m11.jpg',
      name : 'Wadilal Ice Cream',
    },
    {
      img : 'assets/imgs/search/m12.jpg',
      name : 'Central Ice Cream',
    }
  ];

  constructor() { }
}
