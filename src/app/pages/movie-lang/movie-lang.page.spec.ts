import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieLangPage } from './movie-lang.page';

describe('MovieLangPage', () => {
  let component: MovieLangPage;
  let fixture: ComponentFixture<MovieLangPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieLangPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieLangPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
