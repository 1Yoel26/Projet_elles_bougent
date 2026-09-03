import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceGrand } from './espace-grand';

describe('EspaceGrand', () => {
  let component: EspaceGrand;
  let fixture: ComponentFixture<EspaceGrand>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceGrand],
    }).compileComponents();

    fixture = TestBed.createComponent(EspaceGrand);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
