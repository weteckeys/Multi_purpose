import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  singers = [
    {
      img : 'assets/imgs/music/singer1.jpg',
      name : 'Hindi'
    },
    {
      img : 'assets/imgs/music/singer2.jpg',
      name : 'Emglish'
    },
    {
      img : 'assets/imgs/music/singer3.jpg',
      name : 'Punjabi'
    },
    {
      img : 'assets/imgs/music/singer4.jpg',
      name : 'Urdu'
    },
  ];

  songs = [
    {
      img : 'assets/imgs/music/1.jpg',
      name : 'Bekhyali'
    },
    {
      img : 'assets/imgs/music/2.jpeg',
      name : 'Dil diya gallan'
    },
    {
      img : 'assets/imgs/music/3.jpeg',
      name : 'Pachhtaoge'
    },
    {
      img : 'assets/imgs/music/4.jpeg',
      name : 'Dilbar'
    },
    {
      img : 'assets/imgs/music/5.jpeg',
      name : 'Illegal Weapon'
    },
    {
      img : 'assets/imgs/music/6.jpeg',
      name : 'Zalima'
    },
    {
      img : 'assets/imgs/music/7.jpeg',
      name : 'High Rated Gabru'
    },
    {
      img : 'assets/imgs/music/8.jpeg',
      name : 'Kinna Sona'
    },
    {
      img : 'assets/imgs/music/9.jpg',
      name : 'Befikre'
    },
    {
      img : 'assets/imgs/music/10.jpg',
      name : 'Ranjhana'
    },
    {
      img : 'assets/imgs/music/11.jpeg',
      name : 'Aankh Marey'
    },
    {
      img : 'assets/imgs/music/12.jpeg',
      name : 'Ishq Mubarak'
    },
    {
      img : 'assets/imgs/music/13.jpeg',
      name : 'Duniya'
    }
  ];

  constructor() { }
}
