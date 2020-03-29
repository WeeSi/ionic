import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SigunpPage } from './sigunp.page';

describe('SigunpPage', () => {
  let component: SigunpPage;
  let fixture: ComponentFixture<SigunpPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SigunpPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SigunpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
