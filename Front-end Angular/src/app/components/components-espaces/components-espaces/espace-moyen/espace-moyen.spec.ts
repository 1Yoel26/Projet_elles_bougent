import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMoyen } from './espace-moyen';

describe('EspaceMoyen', () => {
  let component: EspaceMoyen;
  let fixture: ComponentFixture<EspaceMoyen>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceMoyen],
    }).compileComponents();

    fixture = TestBed.createComponent(EspaceMoyen);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
