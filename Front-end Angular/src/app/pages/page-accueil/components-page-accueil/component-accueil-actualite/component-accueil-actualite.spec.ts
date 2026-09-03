import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAccueilActualite } from './component-accueil-actualite';

describe('ComponentAccueilActualite', () => {
  let component: ComponentAccueilActualite;
  let fixture: ComponentFixture<ComponentAccueilActualite>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAccueilActualite],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentAccueilActualite);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
