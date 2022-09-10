import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MoreMusicPage } from './more-music.page';

describe('MoreMusicPage', () => {
  let component: MoreMusicPage;
  let fixture: ComponentFixture<MoreMusicPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreMusicPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MoreMusicPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
