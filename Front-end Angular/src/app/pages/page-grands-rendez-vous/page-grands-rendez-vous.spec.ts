import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGrandsRendezVous } from './page-grands-rendez-vous';

describe('PageGrandsRendezVous', () => {
  let component: PageGrandsRendezVous;
  let fixture: ComponentFixture<PageGrandsRendezVous>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGrandsRendezVous]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGrandsRendezVous);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
