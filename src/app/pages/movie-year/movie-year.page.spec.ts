import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieYearPage } from './movie-year.page';

describe('MovieYearPage', () => {
  let component: MovieYearPage;
  let fixture: ComponentFixture<MovieYearPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieYearPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieYearPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
