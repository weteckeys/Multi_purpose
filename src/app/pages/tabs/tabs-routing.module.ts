import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'social',
        loadChildren: () => import('../social/social.module').then(m => m.SocialPageModule)
      },
      {
        path: 'videos',
        loadChildren: () => import('../videos/videos.module').then(m => m.VideosPageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../pay/pay.module').then(m => m.PayPageModule)
      },
      {
        path: 'news',
        loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
      },
      {
        path: 'live-tv',
        loadChildren: () => import('../live-tv/live-tv.module').then(m => m.LiveTvPageModule)
      },
      {
        path: 'music',
        loadChildren: () => import('../music/music.module').then(m => m.MusicPageModule)
      },
      {
        path: 'music-list',
        loadChildren: () => import('../music-list/music-list.module').then(m => m.MusicListPageModule)
      },
      {
        path: 'more-music',
        loadChildren: () => import('../more-music/more-music.module').then(m => m.MoreMusicPageModule)
      },
      {
        path: 'music-video',
        loadChildren: () => import('../music-video/music-video.module').then(m => m.MusicVideoPageModule)
      },
      {
        path: 'cricket',
        loadChildren: () => import('../cricket/cricket.module').then(m => m.CricketPageModule)
      },
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then(m => m.MoviesPageModule)
      },
      {
        path: 'popular',
        loadChildren: () => import('../popular/popular.module').then(m => m.PopularPageModule)
      },
      {
        path: 'movie-details',
        loadChildren: () => import('../movie-details/movie-details.module').then(m => m.MovieDetailsPageModule)
      },
      {
        path: 'main-page',
        loadChildren: () => import('../main-page/main-page.module').then(m => m.MainPagePageModule)
      },
      {
        path: 'notification',
        loadChildren: () => import('../notification/notification.module').then(m => m.NotificationPageModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('../maps/maps.module').then(m => m.MapsPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
