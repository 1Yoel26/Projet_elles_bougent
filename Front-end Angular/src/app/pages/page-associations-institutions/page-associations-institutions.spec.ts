import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAssociationsInstitutions } from './page-associations-institutions';

describe('PageAssociationsInstitutions', () => {
  let component: PageAssociationsInstitutions;
  let fixture: ComponentFixture<PageAssociationsInstitutions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAssociationsInstitutions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAssociationsInstitutions);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
