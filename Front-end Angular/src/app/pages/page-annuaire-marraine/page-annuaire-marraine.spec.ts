import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAnnuaireMarraine } from './page-annuaire-marraine';

describe('PageAnnuaireMarraine', () => {
  let component: PageAnnuaireMarraine;
  let fixture: ComponentFixture<PageAnnuaireMarraine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAnnuaireMarraine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAnnuaireMarraine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
