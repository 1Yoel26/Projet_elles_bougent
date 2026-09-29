import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePersonnelsEducatifs } from './page-personnels-educatifs';

describe('PagePersonnelsEducatifs', () => {
  let component: PagePersonnelsEducatifs;
  let fixture: ComponentFixture<PagePersonnelsEducatifs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PagePersonnelsEducatifs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagePersonnelsEducatifs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
