import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConnectionCompte } from './page-connection-compte';

describe('PageConnectionCompte', () => {
  let component: PageConnectionCompte;
  let fixture: ComponentFixture<PageConnectionCompte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConnectionCompte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConnectionCompte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
