import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspaceMini } from './espace-mini';

describe('EspaceMini', () => {
  let component: EspaceMini;
  let fixture: ComponentFixture<EspaceMini>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspaceMini]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspaceMini);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
