import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitreMarron } from './titre-marron';

describe('TitreMarron', () => {
  let component: TitreMarron;
  let fixture: ComponentFixture<TitreMarron>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TitreMarron]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitreMarron);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
