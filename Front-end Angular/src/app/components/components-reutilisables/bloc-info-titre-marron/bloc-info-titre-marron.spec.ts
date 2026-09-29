import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocInfoTitreMarron } from './bloc-info-titre-marron';

describe('BlocInfoTitreMarron', () => {
  let component: BlocInfoTitreMarron;
  let fixture: ComponentFixture<BlocInfoTitreMarron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocInfoTitreMarron]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocInfoTitreMarron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
