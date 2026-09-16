import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDons } from './page-dons';

describe('PageDons', () => {
  let component: PageDons;
  let fixture: ComponentFixture<PageDons>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDons]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDons);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
