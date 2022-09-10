import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MovieGanresPage } from './movie-ganres.page';

describe('MovieGanresPage', () => {
  let component: MovieGanresPage;
  let fixture: ComponentFixture<MovieGanresPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGanresPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MovieGanresPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
