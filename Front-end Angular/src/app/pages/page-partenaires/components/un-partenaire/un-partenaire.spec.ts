import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnPartenaire } from './un-partenaire';

describe('UnPartenaire', () => {
  let component: UnPartenaire;
  let fixture: ComponentFixture<UnPartenaire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnPartenaire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnPartenaire);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
