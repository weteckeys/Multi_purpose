import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  slider = [
    {
      img : 'assets/imgs/all.png',
      name : 'All Categories'
    },
    {
      img : 'assets/imgs/shop.png',
      name : 'Shopping'
    },
    {
      img : 'assets/imgs/cake.png',
      name : 'Cake Shop'
    },
    {
      img : 'assets/imgs/rest.png',
      name : 'Restautants'
    },
    {
      img : 'assets/imgs/science.png',
      name : 'Diagnostic Center'
    },
    {
      img : 'assets/imgs/doctor.png',
      name : 'Doctors'
    },
    {
      img : 'assets/imgs/repair.png',
      name : 'Repair'
    },
    {
      img : 'assets/imgs/auto.png',
      name : 'Automobile'
    },
  ];

  news = [
    {
      logo : 'assets/imgs/news_icn1.png',
      img : 'assets/imgs/news1.jpg',
      video : 'assets/imgs/video.mp4',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn2.png',
      // img : 'assets/imgs/news2.jpg',
      video : 'assets/imgs/video1.mp4',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn3.png',
      img : 'assets/imgs/news3.jpg',
      video : 'assets/imgs/video2.mp4',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn4.png',
      img : 'assets/imgs/news4.jpg',
      video : 'assets/imgs/video.mp4',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn5.png',
      // img : 'assets/imgs/news5.jpg',
      video : 'assets/imgs/video1.mp4',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn6.png',
      img : 'assets/imgs/news6.jpg',
      video : 'assets/imgs/video2.mp4',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
  ];

  story = [
    {
      img : 'assets/imgs/story1.jpg',
      name : 'Business'
    },
    {
      img : 'assets/imgs/story2.jpg',
      name : 'Music World'
    },
    {
      img : 'assets/imgs/story3.jpg',
      name : 'Stay Fit'
    },
    {
      img : 'assets/imgs/story4.jpg',
      name : 'World'
    },
    {
      img : 'assets/imgs/story5.jpg',
      name : 'Covid-19'
    },
    {
      img : 'assets/imgs/story6.jpg',
      name : 'Health'
    },
    {
      img : 'assets/imgs/story7.jpg',
      name : 'Science World'
    }
  ];

  lang = ['Gujrati', 'Hindi', 'English', 'Marathi', 'Panjabi', 'Nepali', 'Tamil', 'Telugu', 'Bengali', 'Urdu'];

  movies = [
    {
      img : 'assets/imgs/image1.jpeg',
      name : 'Stranger Things',
      per : '60'
    },
    {
      img : 'assets/imgs/image2.jpeg',
      name : 'Lucifer',
      per : '55'
    },
    {
      img : 'assets/imgs/image3.jpeg',
      name : 'Dangal',
      per : '80'
    },
    {
      img : 'assets/imgs/image4.jpeg',
      name : 'Kabir Singh',
      per : '70'
    },
    {
      img : 'assets/imgs/image5.jpeg',
      name : 'Phanton',
      per : '50'
    },
    {
      img : 'assets/imgs/image6.jpeg',
      name : 'Saaho',
      per : '50'
    },
    {
      img : 'assets/imgs/image7.jpeg',
      name : 'Bard of Blood',
      per : '65'
    },
    {
      img : 'assets/imgs/image8.jpeg',
      name : 'Panipat',
      per : '55'
    },
    {
      img : 'assets/imgs/image9.jpeg',
      name : 'Raees',
      per : '70'
    },
    {
      img : 'assets/imgs/image10.jpeg',
      name : 'Bahubali',
      per : '70'
    },
    {
      img : 'assets/imgs/image11.jpeg',
      name : 'Another Life',
      per : '72'
    },
    {
      img : 'assets/imgs/image12.jpeg',
      name : 'THE 100',
      per : '60'
    },
    {
      img : 'assets/imgs/image13.jpeg',
      name : 'The Vampire Diaries',
      per : '66'
    },
    {
      img : 'assets/imgs/image14.jpeg',
      name : 'Titans',
      per : '68'
    },
    {
      img : 'assets/imgs/image15.jpeg',
      name : 'Lock & Key',
      per : '57'
    },
    {
      img : 'assets/imgs/image16.jpeg',
      name : 'The Witcher',
      per : '50'
    },
  ];

  users = [
    {
      user : 'assets/imgs/users/user1.jpg',
      name : 'John Doe',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?',
      review : '3.0'
    },
    {
      user : 'assets/imgs/users/user2.jpg',
      name : 'Rahul Jograna',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?',
      review : '2.0'
    },
    {
      user : 'assets/imgs/users/user3.jpg',
      name : 'John Doe',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?',
      review : '4.0'
    },
    {
      user : 'assets/imgs/users/user4.jpg',
      name : 'John Doe',
      desc : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?',
      review : '3.0'
    }
  ];

  moreCat = [
    {
      img : 'assets/imgs/chart.png',
      name : 'Stock'
    },
    {
      img : 'assets/imgs/tv.png',
      name : 'Live TV'
    },
    {
      img : 'assets/imgs/music.png',
      name : 'Music'
    },
    {
      img : 'assets/imgs/map.png',
      name : 'Maps'
    },
    {
      img : 'assets/imgs/radio.png',
      name : 'Radio'
    },
    {
      img : 'assets/imgs/ball.png',
      name : 'Cricket'
    },
    {
      img : 'assets/imgs/cart.png',
      name : 'Shopping'
    },
    {
      img : 'assets/imgs/image.png',
      name : 'Images'
    },
    {
      img : 'assets/imgs/covid.png',
      name : 'Covid-19'
    },
    {
      img : 'assets/imgs/setting.png',
      name : 'Settings'
    },
    {
      img : 'assets/imgs/clapper.png',
      name : 'Movies'
    },
  ];

  repoters = [
    {
      img : 'assets/imgs/news/reporter1.jpg',
      name : 'English'
    },
    {
      img : 'assets/imgs/news/reporter2.jpg',
      name : 'Hindi'
    },
    {
      img : 'assets/imgs/news/reporter3.jpg',
      name : 'Gujrati'
    },
    {
      img : 'assets/imgs/news/reporter4.jpg',
      name : 'Marathi'
    },
    {
      img : 'assets/imgs/news/reporter5.jpg',
      name : 'Telugu'
    },
    {
      img : 'assets/imgs/news/reporter6.jpg',
      name : 'Kannada'
    },
    {
      img : 'assets/imgs/news/reporter7.jpg',
      name : 'Malayalam'
    },
  ];

  channelList = [
    {
      img : 'assets/imgs/news/channel1.png',
      name : 'India Today',
      logo : 'assets/imgs/news/c1.png'
    },
    {
      img : 'assets/imgs/news/channel2.jpeg',
      name : 'Mirror Now',
      logo : 'assets/imgs/news/c2.jpg'
    },
    {
      img : 'assets/imgs/news/channel3.jpeg',
      name : 'Times Now',
      logo : 'assets/imgs/news/c3.jpg'
    },
    {
      img : 'assets/imgs/news/channel4.png',
      name : 'NDTV 24X7',
      logo : 'assets/imgs/news/c4.png'
    },
    {
      img : 'assets/imgs/news/channel5.png',
      name : 'News 18',
      logo : 'assets/imgs/news/c5.png'
    },
  ];

  notification = [
    {
      img : 'assets/imgs/news_icn1.png',
      head : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      sub : 'At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit'
    },
    {
      img : 'assets/imgs/news_icn10.png',
      head : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      sub : 'At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit'
    },
    {
      img : 'assets/imgs/story5.jpg',
      head : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      sub : 'At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit'
    },
    {
      img : 'assets/imgs/news4.jpg',
      head : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      sub : 'At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit'
    },
    {
      img : 'assets/imgs/news/channel5.png',
      head : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      sub : 'At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit'
    },
    {
      img : 'assets/imgs/news/channel1.png',
      head : 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
      sub : 'At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit'
    },
  ];

  constructor() { }
}
