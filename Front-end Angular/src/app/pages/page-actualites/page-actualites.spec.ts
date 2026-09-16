import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActualites } from './page-actualites';

describe('PageActualites', () => {
  let component: PageActualites;
  let fixture: ComponentFixture<PageActualites>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageActualites]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageActualites);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
