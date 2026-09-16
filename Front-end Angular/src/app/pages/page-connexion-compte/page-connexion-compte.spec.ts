import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageConnexionCompte } from './page-connexion-compte';

describe('PageConnexionCompte', () => {
  let component: PageConnexionCompte;
  let fixture: ComponentFixture<PageConnexionCompte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageConnexionCompte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageConnexionCompte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
