import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEngagement } from './page-engagement';

describe('PageEngagement', () => {
  let component: PageEngagement;
  let fixture: ComponentFixture<PageEngagement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEngagement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEngagement);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
