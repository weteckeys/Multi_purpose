import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieRatingPage } from './movie-rating.page';

describe('MovieRatingPage', () => {
  let component: MovieRatingPage;
  let fixture: ComponentFixture<MovieRatingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieRatingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieRatingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
