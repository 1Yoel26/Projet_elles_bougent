import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocChiffreRose } from './bloc-chiffre-rose';

describe('BlocChiffreRose', () => {
  let component: BlocChiffreRose;
  let fixture: ComponentFixture<BlocChiffreRose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocChiffreRose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocChiffreRose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
