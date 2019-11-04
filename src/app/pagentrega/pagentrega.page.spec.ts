import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagentregaPage } from './pagentrega.page';

describe('PagentregaPage', () => {
  let component: PagentregaPage;
  let fixture: ComponentFixture<PagentregaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagentregaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagentregaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
