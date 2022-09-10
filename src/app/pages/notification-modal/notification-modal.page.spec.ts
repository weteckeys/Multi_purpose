import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotificationModalPage } from './notification-modal.page';

describe('NotificationModalPage', () => {
  let component: NotificationModalPage;
  let fixture: ComponentFixture<NotificationModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationModalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotificationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
