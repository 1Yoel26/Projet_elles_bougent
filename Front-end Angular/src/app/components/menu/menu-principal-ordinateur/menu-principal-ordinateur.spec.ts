import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuPrincipalOrdinateur } from './menu-principal-ordinateur';

describe('MenuPrincipalOrdinateur', () => {
  let component: MenuPrincipalOrdinateur;
  let fixture: ComponentFixture<MenuPrincipalOrdinateur>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuPrincipalOrdinateur]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuPrincipalOrdinateur);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
