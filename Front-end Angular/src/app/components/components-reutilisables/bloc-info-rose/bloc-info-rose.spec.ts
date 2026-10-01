import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocInfoRose } from './bloc-info-rose';

describe('BlocInfoRose', () => {
  let component: BlocInfoRose;
  let fixture: ComponentFixture<BlocInfoRose>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocInfoRose]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocInfoRose);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
