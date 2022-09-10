import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoviePlarformPage } from './movie-plarform.page';

describe('MoviePlarformPage', () => {
  let component: MoviePlarformPage;
  let fixture: ComponentFixture<MoviePlarformPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoviePlarformPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoviePlarformPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
