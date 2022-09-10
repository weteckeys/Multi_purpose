import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'social',
    loadChildren: () => import('./pages/social/social.module').then(m => m.SocialPageModule)
  },
  {
    path: 'movies',
    loadChildren: () => import('./pages/movies/movies.module').then(m => m.MoviesPageModule)
  },
  {
    path: 'pay',
    loadChildren: () => import('./pages/pay/pay.module').then(m => m.PayPageModule)
  },
  {
    path: 'news',
    loadChildren: () => import('./pages/news/news.module').then(m => m.NewsPageModule)
  },
  {
    path: 'more',
    loadChildren: () => import('./pages/more/more.module').then(m => m.MorePageModule)
  },
  {
    path: 'more-modal',
    loadChildren: () => import('./pages/more-modal/more-modal.module').then(m => m.MoreModalPageModule)
  },
  {
    path: 'videos',
    loadChildren: () => import('./pages/videos/videos.module').then(m => m.VideosPageModule)
  },
  {
    path: 'choose-language',
    loadChildren: () => import('./pages/choose-language/choose-language.module').then(m => m.ChooseLanguagePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'live-tv',
    loadChildren: () => import('./pages/live-tv/live-tv.module').then(m => m.LiveTvPageModule)
  },
  {
    path: 'music',
    loadChildren: () => import('./pages/music/music.module').then(m => m.MusicPageModule)
  },
  {
    path: 'music-list',
    loadChildren: () => import('./pages/music-list/music-list.module').then(m => m.MusicListPageModule)
  },
  {
    path: 'more-music',
    loadChildren: () => import('./pages/more-music/more-music.module').then(m => m.MoreMusicPageModule)
  },
  {
    path: 'music-video',
    loadChildren: () => import('./pages/music-video/music-video.module').then(m => m.MusicVideoPageModule)
  },
  {
    path: 'cricket',
    loadChildren: () => import('./pages/cricket/cricket.module').then(m => m.CricketPageModule)
  },
  {
    path: 'cricket-news',
    loadChildren: () => import('./pages/cricket-news/cricket-news.module').then(m => m.CricketNewsPageModule)
  },
  {
    path: 'main-page',
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainPagePageModule)
  },
  {
    path: 'popular',
    loadChildren: () => import('./pages/popular/popular.module').then(m => m.PopularPageModule)
  },
  {
    path: 'movie-details',
    loadChildren: () => import('./pages/movie-details/movie-details.module').then(m => m.MovieDetailsPageModule)
  },
  {
    path: 'special-news',
    loadChildren: () => import('./pages/special-news/special-news.module').then(m => m.SpecialNewsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'new-post',
    loadChildren: () => import('./pages/new-post/new-post.module').then(m => m.NewPostPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then(m => m.ProfilePageModule)
  },
  {
    path: 'movie-cat',
    loadChildren: () => import('./pages/movie-cat/movie-cat.module').then(m => m.MovieCatPageModule)
  },
  {
    path: 'movie-lang',
    loadChildren: () => import('./pages/movie-lang/movie-lang.module').then(m => m.MovieLangPageModule)
  },
  {
    path: 'movie-rating',
    loadChildren: () => import('./pages/movie-rating/movie-rating.module').then(m => m.MovieRatingPageModule)
  },
  {
    path: 'movie-ganres',
    loadChildren: () => import('./pages/movie-ganres/movie-ganres.module').then(m => m.MovieGanresPageModule)
  },
  {
    path: 'movie-year',
    loadChildren: () => import('./pages/movie-year/movie-year.module').then(m => m.MovieYearPageModule)
  },
  {
    path: 'movie-plarform',
    loadChildren: () => import('./pages/movie-plarform/movie-plarform.module').then(m => m.MoviePlarformPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./pages/notification/notification.module').then(m => m.NotificationPageModule)
  },
  {
    path: 'notification-modal',
    loadChildren: () => import('./pages/notification-modal/notification-modal.module').then(m => m.NotificationModalPageModule)
  },
  {
    path: 'maps',
    loadChildren: () => import('./pages/maps/maps.module').then(m => m.MapsPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then(m => m.SettingsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
