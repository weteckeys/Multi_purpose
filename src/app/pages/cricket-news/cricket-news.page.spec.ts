import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CricketNewsPage } from './cricket-news.page';

describe('CricketNewsPage', () => {
  let component: CricketNewsPage;
  let fixture: ComponentFixture<CricketNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CricketNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
