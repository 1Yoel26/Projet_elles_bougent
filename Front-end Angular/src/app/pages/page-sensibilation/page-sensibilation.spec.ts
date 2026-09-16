import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSensibilation } from './page-sensibilation';

describe('PageSensibilation', () => {
  let component: PageSensibilation;
  let fixture: ComponentFixture<PageSensibilation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSensibilation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSensibilation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
