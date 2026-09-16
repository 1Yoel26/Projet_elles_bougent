import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageBenevole } from './page-benevole';

describe('PageBenevole', () => {
  let component: PageBenevole;
  let fixture: ComponentFixture<PageBenevole>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageBenevole]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageBenevole);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
