import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacePetit } from './espace-petit';

describe('EspacePetit', () => {
  let component: EspacePetit;
  let fixture: ComponentFixture<EspacePetit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspacePetit],
    }).compileComponents();

    fixture = TestBed.createComponent(EspacePetit);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
