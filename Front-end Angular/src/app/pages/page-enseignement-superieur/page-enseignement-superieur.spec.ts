import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEnseignementSuperieur } from './page-enseignement-superieur';

describe('PageEnseignementSuperieur', () => {
  let component: PageEnseignementSuperieur;
  let fixture: ComponentFixture<PageEnseignementSuperieur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEnseignementSuperieur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageEnseignementSuperieur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
