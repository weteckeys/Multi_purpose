import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  games = [
    {
      img : 'assets/imgs/game/1.jpg',
      headline : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      name : 'India Today',
      logo : 'assets/imgs/news/c1.png'
    },
    {
      img : 'assets/imgs/game/2.jpg',
      headline : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      name : 'India Today',
      logo : 'assets/imgs/news/c2.jpg'
    },
    {
      img : 'assets/imgs/game/3.jpg',
      headline : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      name : 'India Today',
      logo : 'assets/imgs/news/c3.jpg'
    },
    {
      img : 'assets/imgs/game/4.jpg',
      headline : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      name : 'India Today',
      logo : 'assets/imgs/news/c4.png'
    },
    {
      img : 'assets/imgs/game/5.jpg',
      headline : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      name : 'India Today',
      logo : 'assets/imgs/news/c5.png'
    },
  ];
  constructor() { }
}
