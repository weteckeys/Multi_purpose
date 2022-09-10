import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SpecialNewsPage } from './special-news.page';

describe('SpecialNewsPage', () => {
  let component: SpecialNewsPage;
  let fixture: ComponentFixture<SpecialNewsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecialNewsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SpecialNewsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
