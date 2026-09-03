import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentAccueil1 } from './component-accueil1';

describe('ComponentAccueil1', () => {
  let component: ComponentAccueil1;
  let fixture: ComponentFixture<ComponentAccueil1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentAccueil1],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentAccueil1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
