import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicRatingModule } from 'ionic-rating';

import { MoreModalPageModule } from './pages/more-modal/more-modal.module';
import { ChooseLanguagePageModule } from './pages/choose-language/choose-language.module';
import { MovieCatPageModule } from './pages/movie-cat/movie-cat.module';
import { MovieLangPageModule } from './pages/movie-lang/movie-lang.module';
import { MovieRatingPageModule } from './pages/movie-rating/movie-rating.module';
import { MovieGanresPageModule } from './pages/movie-ganres/movie-ganres.module';
import { MovieYearPageModule } from './pages/movie-year/movie-year.module';
import { MoviePlarformPageModule } from './pages/movie-plarform/movie-plarform.module';
import { NotificationModalPageModule } from './pages/notification-modal/notification-modal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    MoreModalPageModule,
    ChooseLanguagePageModule,
    MovieCatPageModule,
    MovieLangPageModule,
    MovieRatingPageModule,
    MovieGanresPageModule,
    MovieYearPageModule,
    MoviePlarformPageModule,
    NotificationModalPageModule,
    IonicRatingModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
