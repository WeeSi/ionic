import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedecinPage } from './medecin.page';

describe('MedecinPage', () => {
  let component: MedecinPage;
  let fixture: ComponentFixture<MedecinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedecinPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedecinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
