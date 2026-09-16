import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDelegations } from './page-delegations';

describe('PageDelegations', () => {
  let component: PageDelegations;
  let fixture: ComponentFixture<PageDelegations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDelegations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDelegations);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
