import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTaxeApprentissage } from './page-taxe-apprentissage';

describe('PageTaxeApprentissage', () => {
  let component: PageTaxeApprentissage;
  let fixture: ComponentFixture<PageTaxeApprentissage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageTaxeApprentissage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTaxeApprentissage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
