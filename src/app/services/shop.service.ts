import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  slider = [
    {
      img : 'assets/imgs/shop/slide1.jpg'
    },
    {
      img : 'assets/imgs/shop/slide2.jpg'
    },
    {
      img : 'assets/imgs/shop/slide3.jpg'
    },
    {
      img : 'assets/imgs/shop/slide4.jpg'
    },
  ];

  products = [
    {
      img : 'assets/imgs/shop/1.jpeg',
      name : 'Mobile'
    },
    {
      img : 'assets/imgs/shop/2.png',
      name : 'Headphones'
    },
    {
      img : 'assets/imgs/shop/3.jpeg',
      name : 'Laptops'
    },
    {
      img : 'assets/imgs/shop/4.jpg',
      name : 'Purse'
    },
    {
      img : 'assets/imgs/shop/5.jpg',
      name : 'Sunglasses'
    },
    {
      img : 'assets/imgs/shop/6.jpg',
      name : 'Bags'
    },
    {
      img : 'assets/imgs/shop/7.jpeg',
      name : 'Chairs'
    },
    {
      img : 'assets/imgs/shop/8.jpeg',
      name : 'Sofa'
    },
    {
      img : 'assets/imgs/shop/9.jpg',
      name : 'Beds'
    },
  ];

  beauty = [
    {
      img : 'assets/imgs/shop/b2.jpeg',
      name : 'Face Cream'
    },
    {
      img : 'assets/imgs/shop/b3.jpeg',
      name : 'Night Cream'
    },
    {
      img : 'assets/imgs/shop/b4.jpeg',
      name : 'Hair oils'
    },
    {
      img : 'assets/imgs/shop/b6.jpeg',
      name : 'Shampoo'
    }
  ];

  deals = [
    {
      img : 'assets/imgs/shop/deal2.jpg'
    },
    {
      img : 'assets/imgs/shop/deal3.png'
    },
    {
      img : 'assets/imgs/shop/deal4.jpg'
    },
    {
      img : 'assets/imgs/shop/deal5.jpg'
    },
    {
      img : 'assets/imgs/shop/deal1.jpg'
    },
  ];

  featureCat = [
    {
      img : 'assets/imgs/shop/c1.jpg',
      name : 'Sports & Accessories'
    },
    {
      img : 'assets/imgs/shop/c2.jpg',
      name : 'Furnishing'
    },
    {
      img : 'assets/imgs/shop/c3.jpg',
      name : 'Personal Care'
    },
    {
      img : 'assets/imgs/shop/c4.jpg',
      name : 'Home Decoratives'
    },
    {
      img : 'assets/imgs/shop/c5.jpg',
      name : 'Kitchen Appliances'
    },
    {
      img : 'assets/imgs/shop/c6.jpg',
      name : 'Gardening Accessories'
    },
    {
      img : 'assets/imgs/shop/c7.jpeg',
      name : 'Sports ware'
    },
  ];

  images = [
    {
      img : 'assets/imgs/shop/i1.jpg',
      name : 'Hollywood'
    },
    {
      img : 'assets/imgs/shop/i2.jpg',
      name : 'Exercise'
    },
    {
      img : 'assets/imgs/shop/i3.jpg',
      name : 'Cricket'
    },
    {
      img : 'assets/imgs/shop/i4.jpg',
      name : 'Travel'
    },
    {
      img : 'assets/imgs/shop/i5.jpg',
      name : 'Lifestyle'
    },
    {
      img : 'assets/imgs/shop/i6.jpg',
      name : 'Automobile'
    },
    {
      img : 'assets/imgs/shop/i7.jpg',
      name : 'Bollywood'
    },
    {
      img : 'assets/imgs/shop/i8.jpg',
      name : 'Yoga'
    }
  ];
  constructor() { }
}
