import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAccueilInscription } from './component-accueil-inscription';

describe('ComponentAccueilInscription', () => {
  let component: ComponentAccueilInscription;
  let fixture: ComponentFixture<ComponentAccueilInscription>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAccueilInscription],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentAccueilInscription);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
