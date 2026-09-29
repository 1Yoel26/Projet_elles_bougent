import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnnuaire } from './page-annuaire';

describe('PageAnnuaire', () => {
  let component: PageAnnuaire;
  let fixture: ComponentFixture<PageAnnuaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAnnuaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAnnuaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
