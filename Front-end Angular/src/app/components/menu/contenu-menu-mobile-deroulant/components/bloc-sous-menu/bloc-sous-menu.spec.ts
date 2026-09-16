import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocSousMenu } from './bloc-sous-menu';

describe('BlocSousMenu', () => {
  let component: BlocSousMenu;
  let fixture: ComponentFixture<BlocSousMenu>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlocSousMenu]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlocSousMenu);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
