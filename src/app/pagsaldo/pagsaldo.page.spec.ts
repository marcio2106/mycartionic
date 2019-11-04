import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagsaldoPage } from './pagsaldo.page';

describe('PagsaldoPage', () => {
  let component: PagsaldoPage;
  let fixture: ComponentFixture<PagsaldoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagsaldoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagsaldoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
