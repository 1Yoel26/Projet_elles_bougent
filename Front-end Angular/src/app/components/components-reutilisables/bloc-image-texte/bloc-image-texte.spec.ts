import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocImageTexte } from './bloc-image-texte';

describe('BlocImageTexte', () => {
  let component: BlocImageTexte;
  let fixture: ComponentFixture<BlocImageTexte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocImageTexte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocImageTexte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
