import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageReseauEducatif } from './page-reseau-educatif';

describe('PageReseauEducatif', () => {
  let component: PageReseauEducatif;
  let fixture: ComponentFixture<PageReseauEducatif>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageReseauEducatif]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageReseauEducatif);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
