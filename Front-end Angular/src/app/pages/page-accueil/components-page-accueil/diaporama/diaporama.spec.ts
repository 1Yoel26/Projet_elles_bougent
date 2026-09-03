import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Diaporama } from './diaporama';

describe('Diaporama', () => {
  let component: Diaporama;
  let fixture: ComponentFixture<Diaporama>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Diaporama]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Diaporama);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
