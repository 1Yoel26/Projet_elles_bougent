import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalMobile } from './menu-principal-mobile';

describe('MenuPrincipalMobile', () => {
  let component: MenuPrincipalMobile;
  let fixture: ComponentFixture<MenuPrincipalMobile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrincipalMobile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalMobile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
