import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocTexteImage } from './bloc-texte-image';

describe('BlocTexteImage', () => {
  let component: BlocTexteImage;
  let fixture: ComponentFixture<BlocTexteImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocTexteImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocTexteImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
