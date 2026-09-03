import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTextCentrerTitreRoseMarron } from './component-text-centrer-titre-rose-marron';

describe('ComponentTextCentrerTitreRoseMarron', () => {
  let component: ComponentTextCentrerTitreRoseMarron;
  let fixture: ComponentFixture<ComponentTextCentrerTitreRoseMarron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentTextCentrerTitreRoseMarron],
    }).compileComponents();

    fixture = TestBed.createComponent(ComponentTextCentrerTitreRoseMarron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
