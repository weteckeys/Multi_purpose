import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  news = [
    {
      logo : 'assets/imgs/news_icn1.png',
      img : 'assets/imgs/news1.jpg',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn2.png',
      img : 'assets/imgs/news2.jpg',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn3.png',
      img : 'assets/imgs/news3.jpg',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn4.png',
      img : 'assets/imgs/news4.jpg',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn5.png',
      img : 'assets/imgs/news5.jpg',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
    {
      logo : 'assets/imgs/news_icn6.png',
      img : 'assets/imgs/news6.jpg',
      headline : 'What is Lorem Ipsum, Lorem Ipsum is simply dummy text of the printing',
      detail : ' Lorem ipsum dolor sit amet consectetur adipisicing elit. At sint quia aperiam corrupti molestias earum, quasi modi laboriosam placeat qui maiores autem non impedit dignissimos suscipit, illo consectetur eos doloremque?'
    },
  ];
  constructor() { }
}
