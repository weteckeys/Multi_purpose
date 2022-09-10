import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicVideoPage } from './music-video.page';

describe('MusicVideoPage', () => {
  let component: MusicVideoPage;
  let fixture: ComponentFixture<MusicVideoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicVideoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicVideoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
