import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieCatPage } from './movie-cat.page';

describe('MovieCatPage', () => {
  let component: MovieCatPage;
  let fixture: ComponentFixture<MovieCatPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieCatPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
