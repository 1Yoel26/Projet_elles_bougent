import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocUneMarraine } from './bloc-une-marraine';

describe('BlocUneMarraine', () => {
  let component: BlocUneMarraine;
  let fixture: ComponentFixture<BlocUneMarraine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocUneMarraine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocUneMarraine);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
