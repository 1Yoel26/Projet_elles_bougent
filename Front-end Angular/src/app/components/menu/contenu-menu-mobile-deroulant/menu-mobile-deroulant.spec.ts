import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuMobileDeroulant } from './menu-mobile-deroulant';

describe('MenuMobileDeroulant', () => {
  let component: MenuMobileDeroulant;
  let fixture: ComponentFixture<MenuMobileDeroulant>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuMobileDeroulant]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuMobileDeroulant);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
